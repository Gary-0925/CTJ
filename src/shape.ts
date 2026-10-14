// __ctj_show("label", expr): a snapshot of the object graph that expr reaches.
//
// At transpile time the static type of expr is turned into a table of shape
// descriptors: one per type reached through pointers, fields, bases and array
// elements.  At run time the runtime function below walks the live values with
// that table, so every node comes out with the C++ type it has, and the graph
// is exactly the one the program built (aliases share a node, cycles close).
//
// A snapshot is written to the log channel as one line:
//   @@ctj-show {"label": ..., "root": V, "nodes": [{"id": n, "type": ..., "value": V}]}
// V is a value: {k:"int",v} {k:"char",v} {k:"bool",v} {k:"float",v} {k:"null"}
// {k:"ptr",to:id} {k:"cstr",v} {k:"struct",n,f:[{n,base,v}]} {k:"arr",items} {k:"str",v}
// {k:"vec",items} {k:"opaque",n} {k:"more",n?}.
//
// A snapshot is cut to keep it small, and says so: at most 300 nodes, 32 items of an array
// or vector (the rest is {k:"more",n} with n left out), and 20000 values.  A cut snapshot
// carries "truncated": true.
namespace CTJ {
  export interface ShapeField {
    n: string;
    j: string | null;
    t: number;
    base?: boolean;
  }

  export interface ShapeDesc {
    k: string;
    n?: string;
    to?: number;
    of?: number;
    len?: number;
    f?: ShapeField[];
    sp?: string | null;
  }

  export interface ShapeTable {
    tab: ShapeDesc[];
    root: number;
  }

  // The name a class shows as: its qualified name without template arguments
  // (a nested class keeps its outer name: Outer::Inner).
  function displayName(fq: string): string {
    let out = "";
    let depth = 0;
    for (const ch of fq) {
      if (ch === "<") depth++;
      else if (ch === ">") depth--;
      else if (depth === 0) out += ch;
    }
    return out;
  }

  // The standard containers that get their own view.  Only the class itself
  // counts: a nested class such as basic_string<...>::_Alloc_hider does not.
  function viewOf(fq: string): string | null {
    if (!fq.endsWith(">")) return null;
    if (fq.startsWith("std::basic_string<")) return "str";
    if (fq.startsWith("std::vector<")) return "vec";
    return null;
  }

  const CHAR_NAMES = new Set(["char", "signed char", "unsigned char", "wchar_t", "char16_t", "char32_t"]);
  const FLOAT_NAMES = new Set(["float", "double", "long double"]);

  class ShapeBuilder {
    tab: ShapeDesc[] = [];
    memo = new Map<string, number>();

    constructor(private cx: Cx) {}

    add(d: ShapeDesc): number {
      this.tab.push(d);
      return this.tab.length - 1;
    }

    ofType(t: CppType): number {
      if (t.ref !== "") {
        const c = t.core();
        return this.ofType(c);
      }
      if (t.isFunc) return this.add({ k: "opaque", n: "function" });
      const key = t.key();
      const hit = this.memo.get(key);
      if (hit !== undefined) return hit;
      let id: number;
      if (t.dims.length) {
        // An array of N elements: the element type is the rest of the dimensions.
        const elem = t.core();
        elem.dims = t.dims.slice(1);
        id = this.add({ k: "arr", len: t.dims[0], of: 0 });
        this.memo.set(key, id);
        this.tab[id].of = this.ofType(elem);
        return id;
      }
      if (t.ptr > 0) {
        const pointee = t.core();
        pointee.ptr = t.ptr - 1;
        id = this.add({ k: "ptr", to: 0 });
        this.memo.set(key, id);
        this.tab[id].to = this.ofType(pointee);
        return id;
      }
      const fq = this.cx.stripAll(t);
      if (fq && this.cx.classes.has(fq)) return this.ofClass(fq);
      if (fq && this.cx.enums.has(fq)) {
        id = this.add({ k: "int", n: this.cx.enums.get(fq)?.short || fq });
        this.memo.set(key, id);
        return id;
      }
      const cn = coreName(t);
      if (cn === "bool") id = this.add({ k: "bool" });
      else if (CHAR_NAMES.has(cn)) id = this.add({ k: "char" });
      else if (FLOAT_NAMES.has(cn)) id = this.add({ k: "float", n: cn });
      else if (isIntegerName(cn)) id = this.add({ k: "int", n: cn });
      else id = this.add({ k: "opaque", n: cn });
      this.memo.set(key, id);
      return id;
    }

    ofClass(fq: string): number {
      const key = "class " + fq;
      const hit = this.memo.get(key);
      if (hit !== undefined) return hit;
      const id = this.add({ k: "struct", n: displayName(fq), f: [], sp: viewOf(fq) });
      this.memo.set(key, id);
      const cls = this.cx.classes.get(fq) as ClsInfo;
      const fields: ShapeField[] = [];
      for (const b of cls.bases) {
        fields.push({ n: displayName(b.fq), j: null, t: this.ofClass(b.fq), base: true });
      }
      for (const name of cls.fields.keys()) {
        if (cls.fieldStatic.has(name)) continue;
        const ft = this.cx.fieldType(cls, name);
        fields.push({ n: name, j: this.cx.fieldJsName(cls, name), t: this.ofType(ft) });
      }
      this.tab[id].f = fields;
      return id;
    }
  }

  // The descriptor table for a value of type t.
  export function shapeTableFor(cx: Cx, t: CppType): ShapeTable {
    const b = new ShapeBuilder(cx);
    const root = b.ofType(t);
    return { tab: b.tab, root };
  }

  // The run-time half: a function $shape(label, value, table) that walks the
  // value and writes the snapshot to the log channel.  Plain JavaScript, so it
  // is emitted into the program as text.
  export const SHAPE_RUNTIME = [
    "function $shape(label, val, tab, root) {",
    "  var objIds = new Map(), cellIds = new Map(), nodes = [], queue = [];",
    "  var MAX_NODES = 300, MAX_ITEMS = 32, MAX_VALUES = 20000;",
    "  var values = 0, truncated = false;",
    "  function fieldOf(tid, obj, name) {",
    "    var d = tab[tid];",
    "    if (d.k !== 'struct' || obj === null || obj === undefined) return null;",
    "    for (var i = 0; i < d.f.length; i++) {",
    "      var f = d.f[i];",
    "      if (!f.base && f.n === name) return { t: f.t, v: obj[f.j] };",
    "    }",
    "    for (var j = 0; j < d.f.length; j++) {",
    "      if (d.f[j].base) { var r = fieldOf(d.f[j].t, obj, name); if (r) return r; }",
    "    }",
    "    return null;",
    "  }",
    "  function path(tid, obj, names) {",
    "    var cur = { t: tid, v: obj };",
    "    for (var i = 0; i < names.length && cur; i++) cur = fieldOf(cur.t, cur.v, names[i]);",
    "    return cur;",
    "  }",
    "  function tname(tid) {",
    "    var d = tab[tid];",
    "    if (d.k === 'ptr') return tname(d.to) + '*';",
    "    if (d.k === 'arr') return tname(d.of) + '[' + (d.len < 0 ? '' : d.len) + ']';",
    "    if (d.k === 'char') return 'char';",
    "    if (d.k === 'bool') return 'bool';",
    "    return d.n || d.k;",
    "  }",
    "  function nodeFor(tid, arr, idx) {",
    "    var target = arr[idx];",
    "    if (tab[tid].k === 'struct') {",
    "      if (objIds.has(target)) return objIds.get(target);",
    "      if (nodes.length >= MAX_NODES) { truncated = true; return -1; }",
    "      var oid = nodes.length;",
    "      objIds.set(target, oid);",
    "      nodes.push({ id: oid, type: tab[tid].n, tid: tid, target: target, value: null });",
    "      return oid;",
    "    }",
    "    var m = cellIds.get(arr);",
    "    if (!m) { m = new Map(); cellIds.set(arr, m); }",
    "    if (m.has(idx)) return m.get(idx);",
    "    if (nodes.length >= MAX_NODES) { truncated = true; return -1; }",
    "    var cid = nodes.length;",
    "    m.set(idx, cid);",
    "    nodes.push({ id: cid, type: tname(tid), tid: tid, target: target, value: null });",
    "    return cid;",
    "  }",
    "  function text(tid, obj) {",
    "    var p = path(tid, obj, ['_M_dataplus', '_M_p']);",
    "    if (!p || !p.v) return '';",
    "    var a = p.v.a, i = p.v.i, len = -1, rep = a[i - 1];",
    "    if (rep && typeof rep === 'object' && typeof rep._M_length === 'number') len = rep._M_length;",
    "    if (len < 0) { len = 0; while (a[i + len]) len++; }",
    "    var s = '';",
    "    for (var k = 0; k < len; k++) s += String.fromCharCode(a[i + k] || 0);",
    "    return s;",
    "  }",
    "  function cstr(p) {",
    "    var s = '';",
    "    for (var k = 0; p.a[p.i + k] && k < 4096; k++) s += String.fromCharCode(p.a[p.i + k]);",
    "    return s;",
    "  }",
    "  function enc(tid, v) {",
    "    if (++values > MAX_VALUES) { truncated = true; return { k: 'more' }; }",
    "    var d = tab[tid];",
    "    switch (d.k) {",
    "      case 'int': return { k: 'int', v: typeof v === 'bigint' ? String(v) : (v === undefined ? 0 : v) };",
    "      case 'char': return { k: 'char', v: v === undefined ? 0 : v };",
    "      case 'bool': return { k: 'bool', v: !!v };",
    "      case 'float': return { k: 'float', v: isFinite(v) ? v : String(v) };",
    "      case 'ptr':",
    "        if (v === null || v === undefined) return { k: 'null' };",
    "        if (tab[d.to].k === 'char') return { k: 'cstr', v: cstr(v) };",
    "        var to = nodeFor(d.to, v.a, v.i);",
    "        return to < 0 ? { k: 'more' } : { k: 'ptr', to: to };",
    "      case 'arr': {",
    "        var items = [];",
    "        var lim = Math.min(d.len, MAX_ITEMS);",
    "        for (var j = 0; j < lim; j++) items.push(enc(d.of, v[j]));",
    "        if (d.len > lim) { items.push({ k: 'more', n: d.len - lim }); truncated = true; }",
    "        return { k: 'arr', items: items };",
    "      }",
    "      case 'struct': {",
    "        if (d.sp === 'str') return { k: 'str', v: text(tid, v) };",
    "        if (d.sp === 'vec') {",
    "          var s = path(tid, v, ['_M_impl', '_M_start']), f = path(tid, v, ['_M_impl', '_M_finish']);",
    "          var vitems = [];",
    "          if (s && f && s.v && f.v && s.v.a === f.v.a) {",
    "            var et = tab[s.t].to;",
    "            var qe = Math.min(f.v.i, s.v.i + MAX_ITEMS);",
    "            for (var q = s.v.i; q < qe; q++) vitems.push(enc(et, s.v.a[q]));",
    "            if (f.v.i > qe) { vitems.push({ k: 'more', n: f.v.i - qe }); truncated = true; }",
    "          }",
    "          return { k: 'vec', items: vitems };",
    "        }",
    "        var fields = [];",
    "        for (var i = 0; i < d.f.length; i++) {",
    "          var fd = d.f[i];",
    "          fields.push({ n: fd.n, base: !!fd.base, v: enc(fd.t, fd.base ? v : v[fd.j]) });",
    "        }",
    "        return { k: 'struct', n: d.n, f: fields };",
    "      }",
    "      default: return { k: 'opaque', n: d.n || d.k };",
    "    }",
    "  }",
    "  var rootV = enc(root, val);",
    "  for (var n = 0; n < nodes.length; n++) nodes[n].value = enc(nodes[n].tid, nodes[n].target);",
    "  var out = nodes.map(function (x) { return { id: x.id, type: x.type, value: x.value }; });",
    "  var snap = { label: label, root: rootV, nodes: out };",
    "  if (truncated) snap.truncated = true;",
    "  $io.write(3, '@@ctj-show ' + JSON.stringify(snap) + '\\n');",
    "}",
  ].join("\n");

  // This file is the optional "shapes" module: loading it registers __ctj_show.  Without
  // the module, __ctj_show is an unknown name.
  EXT_BUILTINS.set("__ctj_show", {
    check(cx: Cx, e: CallExpr, argTs: { t: CppType; e: Expr }[]): CppType {
      // __ctj_show("label", expr): the descriptor table is built for the type of expr.
      if (argTs.length !== 2) cx.fail("__ctj_show takes a label and one expression", e);
      cx.getAnn(e).call = { builtin: "__ctj_show", ext: shapeTableFor(cx, argTs[1].t) };
      return CppType.basic("void");
    },
    emit(gen: ExtGen, cx: Cx, e: CallExpr): string {
      const sh = (cx.getAnn(e).call as { ext: ShapeTable }).ext;
      return `$shape(${(e.args[0] as LitExpr).value}, ${gen.exVal(e.args[1])}, ${JSON.stringify(sh.tab)}, ${sh.root})`;
    },
    runtime: SHAPE_RUNTIME,
  });
}
