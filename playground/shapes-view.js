// The data shapes panel of the playground, and the example that uses __ctj_show.
//
// This file is optional.  It is copied to dist/ and loaded only when the shapes module was
// built (see scripts/build.js); a build without the module has neither the panel nor the
// example.  The page talks to it through window.CTJPlugins:
//   mount(main)  once, after the page is set up
//   clear()      before each run
//   onRun(res)   after each run; returns the run result to show (here: without the snapshots)
//   examples     extra entries for the example list
(function () {
  "use strict";

  const style = document.createElement("style");
  style.textContent = `
  #shapes {
  grid-column: 1 / -1;
  min-height: 0;
  }
  #shapes-body {
  flex: 1;
  overflow: auto;
  padding: 8px 12px;
  min-height: 0;
  color: #9aa1b1;
  font-size: 13px;
  }
  #shapes-body .snap + .snap {
  margin-top: 14px;
  }
  #shapes-body h3 {
  margin: 0 0 4px;
  font: 600 13px/1.4 ui-monospace, Consolas, monospace;
  color: #e6e6e6;
  }
  #shapes-body svg {
  display: block;
  max-width: 100%;
  }
`;
  document.head.appendChild(style);

      // __ctj_show lines travel on the log channel; they are drawn in the shapes panel,
      // not printed with the rest of the log.
      const SHOW_TAG = "@@ctj-show ";
      const SVG_NS = "http://www.w3.org/2000/svg";
      const CHAR_W = 7.8;

      function shapeText(v) {
        switch (v.k) {
          case "int":
          case "float":
            return String(v.v);
          case "char":
            return v.v + " '" + String.fromCharCode(v.v) + "'";
          case "bool":
            return v.v ? "true" : "false";
          case "elem":
            return "#" + v.to;
          case "null":
            return "null";
          case "ptr":
            return "→";
          case "cstr":
          case "str":
            return JSON.stringify(v.v);
          case "struct":
            return "{" + v.f.map(f => shapeText(f.v)).join(", ") + "}";
          case "arr":
          case "vec": {
            // A long row would make its box too wide to read; the snapshot keeps every item.
            const text = "[" + v.items.map(shapeText).join(", ") + "]" + (v.unused ? "  +" + v.unused + " 个未用" : "");
            return text.length > 160 ? text.slice(0, 157) + "…" : text;
          }
          case "more":
            return v.n !== undefined ? "… " + v.n + " more" : "…";
          default:
            return v.n || v.k;
        }
      }

      // The node ids a value points at, in order.
      function shapeTargets(v, out) {
        if (v.k === "ptr") out.push(v.to);
        else if (v.k === "struct") v.f.forEach(f => shapeTargets(f.v, out));
        else if (v.k === "arr" || v.k === "vec") v.items.forEach(x => shapeTargets(x, out));
        return out;
      }

      // One row per field: nested structs are flattened, base class fields join their owner.
      // link: the elements a field points at (set by the runtime, from the subscripts the run
      // made), drawn as dashed edges.
      function shapeRows(label, v, rows, link) {
        if (v.k === "struct") {
          for (const f of v.f) {
            const sub = f.base ? label : (label ? label + "." : "") + f.n;
            shapeRows(sub, f.v, rows, f.to !== undefined ? [f.to] : f.roots);
          }
          return rows;
        }
        const inf = link || [];
        rows.push({ label, text: shapeText(v), targets: shapeTargets(v, []).concat(inf), inf });
        return rows;
      }

      // Boxes for the root and every node, and an edge for every pointer.  The layout walks the
      // graph depth first from the root.  A pointer back to a box on the current path (a parent
      // pointer, a cycle) is not drawn: its row shows "↑#n" instead.  A pointer to a box already
      // placed is drawn as a plain edge.  Boxes the walk reaches sit in a column by their depth.
      // The others (array elements, listed by number in the array row) are set out in a grid
      // below, in index order.
      const GRID_W = 900;
      function shapeLayout(snap) {
        const boxes = new Map();
        const rootRows = snap.root.k === "ptr" ? [{ label: "", text: "→", targets: [snap.root.to] }] : shapeRows("", snap.root, []);
        boxes.set("root", { id: "root", title: snap.label, rows: rootRows });
        for (const n of snap.nodes) {
          boxes.set("n" + n.id, { id: "n" + n.id, title: n.type + " #" + n.id, rows: shapeRows("", n.value, []) });
        }
        for (const b of boxes.values()) for (const r of b.rows) r.back = [];
        const depth = new Map([["root", 0]]);
        const order = ["root"];
        const onPath = new Set();
        const walk = id => {
          onPath.add(id);
          for (const r of boxes.get(id).rows) {
            for (const t of r.targets) {
              const to = "n" + t;
              if (!boxes.has(to)) continue;
              if (onPath.has(to)) r.back.push(to);
              else if (!depth.has(to)) {
                depth.set(to, depth.get(id) + 1);
                order.push(to);
                walk(to);
              }
            }
          }
          onPath.delete(id);
        };
        walk("root");
        for (const b of boxes.values()) {
          for (const r of b.rows) {
            if (r.back.length) r.text += "  ↑ " + r.back.map(x => "#" + x.slice(1)).join(" ");
          }
          let w = b.title.length * CHAR_W;
          for (const r of b.rows) w = Math.max(w, (r.label.length + 1 + r.text.length) * CHAR_W);
          b.w = Math.max(96, Math.ceil(w) + 24);
          b.h = 30 + b.rows.length * 20 + 8;
        }
        const cols = [];
        for (const id of order) {
          const c = depth.get(id);
          (cols[c] = cols[c] || []).push(boxes.get(id));
        }
        let x = 16;
        let maxY = 0;
        cols.forEach(col => {
          let colW = 0;
          for (const b of col) colW = Math.max(colW, b.w);
          let y = 16;
          for (const b of col) {
            b.x = x;
            b.y = y;
            y += b.h + 22;
          }
          maxY = Math.max(maxY, y);
          x += colW + 64;
        });
        const rest = [...boxes.values()].filter(b => !depth.has(b.id));
        const gridW = Math.max(x, GRID_W);
        let gx = 16;
        let gy = maxY ? maxY + 40 : 16;
        let rowH = 0;
        let right = x;
        for (const b of rest) {
          if (gx > 16 && gx + b.w > gridW) {
            gx = 16;
            gy += rowH + 22;
            rowH = 0;
          }
          b.x = gx;
          b.y = gy;
          gx += b.w + 24;
          rowH = Math.max(rowH, b.h);
          right = Math.max(right, gx);
        }
        const bottom = rest.length ? gy + rowH + 16 : maxY;
        const edges = [];
        for (const b of boxes.values()) {
          b.rows.forEach((r, i) => {
            for (const t of r.targets) {
              const id = "n" + t;
              if (r.back.includes(id) || !boxes.has(id)) continue;
              edges.push({ from: b, row: i, to: boxes.get(id), inf: (r.inf || []).includes(t) });
            }
          });
        }
        return { boxes: [...order.map(id => boxes.get(id)), ...rest], edges, width: Math.max(right, 120), height: Math.max(bottom, 60) };
      }

      function el(name, attrs, text) {
        const e = document.createElementNS(SVG_NS, name);
        for (const k in attrs) e.setAttribute(k, attrs[k]);
        if (text !== undefined) e.textContent = text;
        return e;
      }

      let shapeSeq = 0;
      function renderShape(snap) {
        const g = shapeLayout(snap);
        const svg = el("svg", { width: g.width, height: g.height, viewBox: `0 0 ${g.width} ${g.height}` });
        const marker = "ctj-arrow-" + shapeSeq++;
        const defs = el("defs", {});
        const mk = el("marker", { id: marker, viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto-start-reverse" });
        mk.appendChild(el("path", { d: "M0,0 L10,5 L0,10 z", fill: "#8ab4f8" }));
        defs.appendChild(mk);
        svg.appendChild(defs);
        for (const e of g.edges) {
          const x1 = e.from.x + e.from.w;
          const y1 = e.from.y + 30 + e.row * 20 + 10;
          const x2 = e.to.x;
          const y2 = e.to.y + 14;
          const dx = Math.max(40, Math.abs(x2 - x1) / 2);
          svg.appendChild(el("path", { d: `M${x1},${y1} C${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`, fill: "none", stroke: "#8ab4f8", "stroke-width": 1.5, "marker-end": `url(#${marker})`, "stroke-dasharray": e.inf ? "5 4" : "none" }));
        }
        for (const b of g.boxes) {
          const grp = el("g", {});
          grp.appendChild(el("rect", { x: b.x, y: b.y, width: b.w, height: b.h, rx: 6, fill: "#1e2430", stroke: b.id === "root" ? "#e0b341" : "#5b7fa8" }));
          grp.appendChild(el("text", { x: b.x + 10, y: b.y + 19, fill: "#e6edf3", "font-family": "ui-monospace, Consolas, monospace", "font-size": 13, "font-weight": 700 }, b.title));
          grp.appendChild(el("line", { x1: b.x, y1: b.y + 26, x2: b.x + b.w, y2: b.y + 26, stroke: "#2c3445" }));
          b.rows.forEach((r, i) => {
            const ty = b.y + 30 + i * 20 + 14;
            if (r.label) grp.appendChild(el("text", { x: b.x + 10, y: ty, fill: "#9aa1b1", "font-family": "ui-monospace, Consolas, monospace", "font-size": 13 }, r.label));
            grp.appendChild(el("text", { x: b.x + 10 + (r.label ? (r.label.length + 1) * CHAR_W : 0), y: ty, fill: "#e6e6e6", "font-family": "ui-monospace, Consolas, monospace", "font-size": 13 }, r.text));
          });
          svg.appendChild(grp);
        }
        return svg;
      }

      function renderShapes(snaps) {
        const body = document.getElementById("shapes-body");
        body.textContent = "";
        if (!snaps.length) {
          const hint = document.createElement("div");
          hint.textContent = "在程序中写 __ctj_show(\"标签\", 表达式); 即可在这里看到对象图。";
          body.appendChild(hint);
          return;
        }
        const legend = document.createElement("div");
        legend.textContent = "实线：指针。虚线：程序里用字段值做下标时形成的链接，以及指向树根的链接。";
        body.appendChild(legend);
        for (const snap of snaps) {
          const box = document.createElement("div");
          box.className = "snap";
          const h = document.createElement("h3");
          h.textContent = snap.truncated ? snap.label + "（已截断）" : snap.label;
          box.appendChild(h);
          box.appendChild(renderShape(snap));
          body.appendChild(box);
        }
      }

  window.CTJPlugins = window.CTJPlugins || [];
  window.CTJPlugins.push({
    name: "shapes",
    examples: [
    {
      name: "数据形态",
      code: `#include <iostream>
#include <string>
#include <vector>
using namespace std;
struct Node {
  int value;
  Node* next;
  Node(int v) : value(v), next(0) {}
};
struct Tree {
  int key;
  Tree* left;
  Tree* right;
  Tree(int k) : key(k), left(0), right(0) {}
};
Tree* insert(Tree* t, int k) {
  if (!t) return new Tree(k);
  if (k < t->key) t->left = insert(t->left, k);
  else t->right = insert(t->right, k);
  return t;
}
int main() {
  int n;
  cin >> n;
  Node* head = 0;
  Tree* root = 0;
  vector<string> names;
  for (int i = 0; i < n; i++) {
int k;
cin >> k;
Node* node = new Node(k);
node->next = head;
head = node;
root = insert(root, k);
names.push_back("item" + to_string(k));
  }
  __ctj_show("list", head);
  __ctj_show("tree", root);
  __ctj_show("names", names);
  return 0;
}
`,
      input: "4\n5 3 8 1\n",
    },
    ],
    mount(main) {
      main.style.gridTemplateRows = "minmax(0, 1fr) minmax(0, 40%)";
      const sec = document.createElement("section");
      sec.id = "shapes";
      sec.innerHTML = "<h2>数据形态</h2><div id=\"shapes-body\"></div>";
      main.appendChild(sec);
      renderShapes([]);
    },
    clear() {
      renderShapes([]);
    },
    onRun(res) {
      const snaps = [];
      const logLines = [];
      for (const line of (res.stdlog || "").split("\n")) {
        if (line.startsWith(SHOW_TAG)) snaps.push(JSON.parse(line.slice(SHOW_TAG.length)));
        else logLines.push(line);
      }
      renderShapes(snaps);
      return Object.assign({}, res, { stdlog: logLines.join("\n") });
    },
  });
})();
