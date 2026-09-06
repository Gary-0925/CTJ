const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
require("../dist/ctj.js");
const CTJ = globalThis.CTJ;

const dir = path.join(__dirname, "cases");
const files = fs.readdirSync(dir).filter(f => f.endsWith(".cpp")).sort();
let pass = 0, fail = 0;
const failed = [];
for (const f of files) {
  const name = f.slice(0, -4);
  const src = fs.readFileSync(path.join(dir, f), "utf8");
  const expFile = path.join(dir, name + ".txt");
  const expected = fs.existsSync(expFile) ? fs.readFileSync(expFile, "utf8") : "";
  try {
    const r = CTJ.transpile(src, { target: "js" });
    const jsFile = path.join(dir, name + ".out.js");
    fs.writeFileSync(jsFile, r.code);
    const out = execFileSync("node", [jsFile], { encoding: "utf8", timeout: 10000 });
    if (out === expected) {
      pass++;
      console.log(`ok   ${name}`);
    } else {
      fail++;
      failed.push(name);
      console.log(`FAIL ${name}`);
      console.log(`--- expected ---\n${expected}--- got ---\n${out}`);
    }
  } catch (e) {
    fail++;
    failed.push(name);
    console.log(`FAIL ${name}: ${e.message}`);
  }
}
console.log(`\n${pass} passed, ${fail} failed`);
if (failed.length) {
  console.log("failed:", failed.join(", "));
  process.exit(1);
}
