#!/usr/bin/env node
"use strict";

const { execFileSync } = require("child_process");
const fs = require("fs");
const http = require("http");
const path = require("path");

const root = path.join(__dirname, "..");
const port = parseInt(process.argv[2] || "8000", 10);

// The playground is useless without the built transpiler, and a stale one in
// the browser cache is worse than none, so build first and forbid caching.
for (const f of ["dist/ctj.js", "include.json"]) {
  if (!fs.existsSync(path.join(root, f))) {
    console.log(`${f} is missing, building first`);
    execFileSync(process.execPath, [path.join(__dirname, "build.js")], { stdio: "inherit" });
    break;
  }
}

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
};

http.createServer((req, res) => {
  const raw = req.url || "/";
  const url = decodeURIComponent(raw.split("?")[0]);
  const file = path.join(root, url === "/" ? "index.html" : url);
  if (file !== root && !file.startsWith(root + path.sep)) {
    res.writeHead(403, { "Content-Type": "text/plain" }).end("forbidden");
    return;
  }
  fs.readFile(file, (err, data) => {
    if (err) {
      console.log(`${req.socket.remoteAddress} ${req.method} ${raw} 404`);
      res.writeHead(404, { "Content-Type": "text/plain" }).end("404 " + url);
      return;
    }
    // A preview proxy can block or mangle a second request for the
    // transpiler, so the page it serves carries the bundle inline. index.html
    // on disk keeps the plain tag and works behind any static server.
    let body = data;
    if (path.basename(file) === "index.html") {
      const tag = '<script src="dist/ctj.js"></script>';
      const html = data.toString("utf8");
      if (html.includes(tag) && fs.existsSync(path.join(root, "dist", "ctj.js"))) {
        const bundle = fs.readFileSync(path.join(root, "dist", "ctj.js"), "utf8");
        // A function, not a string: the bundle contains $ patterns that a
        // replacement string would interpret.
        body = Buffer.from(html.replace(tag, () => "<script>\n" + bundle + "\n</script>"), "utf8");
      }
    }
    console.log(`${req.socket.remoteAddress} ${req.method} ${raw} 200 ${body.length}`);
    res.writeHead(200, {
      "Content-Type": TYPES[path.extname(file)] || "application/octet-stream",
      "Content-Length": body.length,
      "Cache-Control": "no-store",
    });
    res.end(body);
  });
}).listen(port, "0.0.0.0", () => {
  console.log(`CTJ playground on http://0.0.0.0:${port}/`);
});
