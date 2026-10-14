#!/usr/bin/env node
"use strict";

const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const tsc = path.join(root, "node_modules", "typescript", "lib", "tsc.js");

if (!fs.existsSync(tsc)) {
  console.error("typescript is not installed, run `npm install` first");
  process.exit(1);
}
execFileSync(process.execPath, [tsc, "-p", root], { stdio: "inherit" });
bundle();

// TypeScript 7 has no outFile, so tsc emits one file per source.  The bundle is those
// files joined in the order tsconfig lists them, which is the order they depend on:
// they share the namespace CTJ.  Only the first "use strict" is kept.
function bundle() {
  const cfg = JSON.parse(fs.readFileSync(path.join(root, "tsconfig.json"), "utf8"));
  const parts = path.join(root, cfg.compilerOptions.outDir);
  const srcDir = path.join(root, cfg.compilerOptions.rootDir);
  const js = ['"use strict";'];
  const dts = [];
  for (const f of cfg.files) {
    const base = path.relative(srcDir, path.join(root, f)).replace(/\.ts$/, "");
    js.push(fs.readFileSync(path.join(parts, base + ".js"), "utf8").replace(/^"use strict";\n/, ""));
    dts.push(fs.readFileSync(path.join(parts, base + ".d.ts"), "utf8"));
  }
  fs.mkdirSync(path.join(root, "dist"), { recursive: true });
  fs.writeFileSync(path.join(root, "dist", "ctj.js"), js.join("\n"));
  fs.writeFileSync(path.join(root, "dist", "ctj.d.ts"), dts.join("\n"));
  fs.rmSync(parts, { recursive: true, force: true });
}

const dist = path.join(root, "dist", "ctj.js");
const kb = n => (n / 1024).toFixed(0) + " KB";

// The playground shows this, so a page running an older bundle says so.
let stamp = new Date().toISOString().slice(0, 19).replace("T", " ") + "Z";
try {
  stamp = execFileSync("git", ["rev-parse", "--short", "HEAD"], { cwd: root, encoding: "utf8" }).trim() + " " + stamp;
} catch {
  // not a git checkout
}
fs.appendFileSync(dist, `\nCTJ.version = ${JSON.stringify(stamp)};\n`);
console.log(`dist/ctj.js: ${kb(fs.statSync(dist).size)} (${stamp})`);

function collect(dir, prefix) {
  const out = {};
  const entries = fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => (a.name < b.name ? -1 : 1));
  for (const e of entries) {
    if (/^[.#]/.test(e.name) || e.name.endsWith("~") || e.name.endsWith(".md")) continue;
    const key = prefix + e.name;
    if (e.isDirectory()) Object.assign(out, collect(path.join(dir, e.name), key + "/"));
    else out[key] = fs.readFileSync(path.join(dir, e.name), "utf8");
  }
  return out;
}

const includeDir = path.join(root, "include");
if (!fs.existsSync(includeDir)) {
  console.error("include/ is missing, nothing to pack");
  process.exit(1);
}
const files = collect(includeDir, "");
const json = JSON.stringify(files);
fs.writeFileSync(path.join(root, "dist/include.json"), json);
console.log(`dist/include.json: ${Object.keys(files).length} headers, ${(json.length / 1024 / 1024).toFixed(1)} MB`);
