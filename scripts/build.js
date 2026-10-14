#!/usr/bin/env node
"use strict";

// Builds dist/: the core (ctj.js), the optional modules, the header table (include.json), and
// dist/modules.json, which the playground reads to load the modules it finds there.
//
//   node scripts/build.js                      the core and every module
//   node scripts/build.js --without shapes     the core and the other modules only

const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const tsc = path.join(root, "node_modules", "typescript", "lib", "tsc.js");

// An optional module: its source files, and the file the playground loads for its view.
const MODULES = {
  shapes: { files: ["src/shape.ts"], view: "playground/shapes-view.js" },
};

if (!fs.existsSync(tsc)) {
  console.error("typescript is not installed, run `npm install` first");
  process.exit(1);
}

const without = [];
const wi = process.argv.indexOf("--without");
if (wi >= 0) {
  for (const m of (process.argv[wi + 1] || "").split(",").filter(Boolean)) {
    if (!(m in MODULES)) {
      console.error(`unknown module: ${m} (modules: ${Object.keys(MODULES).join(", ")})`);
      process.exit(1);
    }
    without.push(m);
  }
}

// Every source file is compiled, the modules left out included, so that they stay type-checked.
execFileSync(process.execPath, [tsc, "-p", root], { stdio: "inherit" });
build();

// TypeScript 7 has no outFile, so tsc emits one file per source.  A bundle is those files joined
// in the order tsconfig lists them, which is the order they depend on: they share the namespace
// CTJ.  Only the first "use strict" is kept.
function build() {
  const cfg = JSON.parse(fs.readFileSync(path.join(root, "tsconfig.json"), "utf8"));
  const parts = path.join(root, cfg.compilerOptions.outDir);
  const srcDir = path.join(root, cfg.compilerOptions.rootDir);
  const partOf = f => path.join(parts, path.relative(srcDir, path.join(root, f)).replace(/\.ts$/, ""));
  const read = f => fs.readFileSync(partOf(f) + ".js", "utf8").replace(/^"use strict";\n/, "");

  const moduleFiles = new Set(Object.values(MODULES).flatMap(m => m.files));
  const coreFiles = cfg.files.filter(f => !moduleFiles.has(f));
  const dist = path.join(root, "dist");
  fs.mkdirSync(dist, { recursive: true });

  // The core.  It alone defines CTJ and sets globalThis.CTJ.
  const core = ['"use strict";', ...coreFiles.map(read)].join("\n");
  const dts = coreFiles.map(f => fs.readFileSync(partOf(f) + ".d.ts", "utf8")).join("\n");
  const coreFile = path.join(dist, "ctj.js");
  fs.writeFileSync(coreFile, core);
  fs.writeFileSync(path.join(dist, "ctj.d.ts"), dts);

  // The modules.  Each one runs after the core and adds to it through globalThis.CTJ.
  const manifest = [];
  for (const [name, m] of Object.entries(MODULES)) {
    const js = path.join(dist, name + ".js");
    const view = path.join(dist, name + "-view.js");
    if (without.includes(name)) {
      fs.rmSync(js, { force: true });
      fs.rmSync(view, { force: true });
      continue;
    }
    const body = m.files.map(read).join("\n");
    fs.writeFileSync(js, `"use strict";\n(function () {\n  var CTJ = globalThis.CTJ;\n  if (!CTJ) throw new Error("dist/ctj.js must be loaded before ${name}");\n${body}\n})();\n`);
    if (m.view) fs.copyFileSync(path.join(root, m.view), view);
    manifest.push({ name, script: name + ".js", view: m.view ? name + "-view.js" : null });
  }
  fs.writeFileSync(path.join(dist, "modules.json"), JSON.stringify(manifest, null, 1) + "\n");
  fs.rmSync(parts, { recursive: true, force: true });

  // The playground shows the stamp, so a page running an older bundle says so.
  const kb = n => (n / 1024).toFixed(0) + " KB";
  let stamp = new Date().toISOString().slice(0, 19).replace("T", " ") + "Z";
  try {
    stamp = execFileSync("git", ["rev-parse", "--short", "HEAD"], { cwd: root, encoding: "utf8" }).trim() + " " + stamp;
  } catch {
    // not a git checkout
  }
  fs.appendFileSync(coreFile, `\nCTJ.version = ${JSON.stringify(stamp)};\n`);
  console.log(`dist/ctj.js: ${kb(fs.statSync(coreFile).size)} (${stamp})`);
  for (const m of manifest) console.log(`dist/${m.script}: module ${m.name}`);
  for (const name of without) console.log(`module ${name} left out`);

  const includeDir = path.join(root, "include");
  if (!fs.existsSync(includeDir)) {
    console.error("include/ is missing, nothing to pack");
    process.exit(1);
  }
  const files = collect(includeDir, "");
  const json = JSON.stringify(files);
  fs.writeFileSync(path.join(dist, "include.json"), json);
  console.log(`dist/include.json: ${Object.keys(files).length} headers, ${(json.length / 1024 / 1024).toFixed(1)} MB`);
}

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
