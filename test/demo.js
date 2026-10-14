// Command-line runner: transpiles a C++ file and runs it.
// Usage: node test/demo.js <file.cpp> [< input.txt]
// Standard input is the program's stdin; its stdout, stderr and exit code are passed through.
const fs = require("fs");
const path = require("path");
require("../dist/ctj.js");
const { loadHeaders } = require("./headers");
const CTJ = globalThis.CTJ;

const file = process.argv[2];
if (!file) {
  console.error("用法: node test/demo.js <file.cpp> [< input.txt]");
  process.exit(2);
}

const headers = loadHeaders(path.join(__dirname, "..", "include"));
let program;
try {
  program = CTJ.transpile(fs.readFileSync(file, "utf8"), { headers });
} catch (e) {
  console.error(`${file}: ${e.file ? e.file + ":" + (e.line || 0) + ": " : ""}${e.message}`);
  process.exit(1);
}
for (const w of program.warnings) console.error(`warning: ${w}`);

const input = process.stdin.isTTY ? "" : fs.readFileSync(0, "utf8");
const res = program.run(input);
process.stdout.write(res.stdout);
process.stderr.write(res.stderr + res.stdlog);
process.exitCode = res.exitCode;
