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
  const url = decodeURIComponent((req.url || "/").split("?")[0]);
  const file = path.join(root, url === "/" ? "index.html" : url);
  if (file !== root && !file.startsWith(root + path.sep)) {
    res.writeHead(403, { "Content-Type": "text/plain" }).end("forbidden");
    return;
  }
  fs.readFile(file, (err, body) => {
    if (err) {
      console.log(`${req.socket.remoteAddress} ${req.method} ${url} 404`);
      res.writeHead(404, { "Content-Type": "text/plain" }).end("404 " + url);
      return;
    }
    console.log(`${req.socket.remoteAddress} ${req.method} ${url} 200 ${body.length}`);
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
