// Snapshot tests for __ctj_show: each case's snapshots are compared with name.json.
// Run with --update to rewrite the expected files after checking them by hand.
const fs = require("fs");
const path = require("path");
require("../dist/ctj.js");
const { loadHeaders } = require("./headers");

// The shapes module is optional: a build without it has nothing to test here.
const moduleFile = path.join(__dirname, "..", "dist", "shapes.js");
if (!fs.existsSync(moduleFile)) {
  console.log("shapes module not built, nothing to test");
  process.exit(0);
}
require(moduleFile);
const CTJ = globalThis.CTJ;

const dir = path.join(__dirname, "shape");
const headers = loadHeaders(path.join(__dirname, "..", "include"));
const update = process.argv.includes("--update");
const TAG = "@@ctj-show ";

let pass = 0;
const failed = [];
for (const f of fs
  .readdirSync(dir)
  .filter(x => x.endsWith(".cpp"))
  .sort()) {
  const name = f.slice(0, -4);
  const expFile = path.join(dir, name + ".json");
  try {
    const r = CTJ.transpile(fs.readFileSync(path.join(dir, f), "utf8"), { headers });
    const res = r.run("");
    if (res.exitCode !== 0) throw new Error(`exit code ${res.exitCode}: ${res.stderr}`);
    // Snapshots go to the log channel only; stdout is the program's own output.
    if (res.stdout.includes(TAG)) throw new Error("snapshot leaked into stdout");
    const shows = res.stdlog
      .split("\n")
      .filter(l => l.startsWith(TAG))
      .map(l => JSON.parse(l.slice(TAG.length)));
    const text = JSON.stringify(shows, null, 1) + "\n";
    if (update) fs.writeFileSync(expFile, text);
    const expected = fs.existsSync(expFile) ? fs.readFileSync(expFile, "utf8") : "";
    if (expected.replace(/\r\n/g, "\n") !== text) throw new Error(`snapshots differ from ${name}.json`);
    pass++;
  } catch (e) {
    failed.push(name);
    console.log(`FAIL ${name}: ${e.message}`);
  }
}
console.log(`\n${pass} passed, ${failed.length} failed`);
if (failed.length) {
  console.log("failed:", failed.join(", "));
  process.exit(1);
}
