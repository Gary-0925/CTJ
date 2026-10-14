const fs = require("fs");
const path = require("path");
require("../dist/ctj.js");
const { loadHeaders } = require("./headers");
const CTJ = globalThis.CTJ;

const SAMPLE = `int fib(int n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
}

int main() {
  for (int i = 0; i < 10; i++) {
    int v = fib(i);
    __ctj_js("console.log($1)", v);
  }
  return 0;
}
`;

const file = process.argv.slice(2).find(a => !a.startsWith("-"));
const source = file ? fs.readFileSync(file, "utf8") : SAMPLE;
const headers = loadHeaders(path.join(__dirname, "..", "include"));

console.log(`== C++ (${file || "内置示例"}) -> JavaScript，标准库头文件 ${Object.keys(headers).length} 个\n`);

let result;
try {
  result = CTJ.transpile(source, { headers: headers });
} catch (e) {
  console.error(`转译失败: ${(e.file ? e.file + ":" + (e.line || 0) + ": " : "") + e.message}`);
  process.exit(1);
}
console.log(result.code);
if (result.warnings.length) {
  console.log(`-- ${result.warnings.length} 条警告 --`);
  result.warnings.slice(0, 20).forEach(w => console.log("   " + w));
}

const res = result.run("");
console.log("-- 运行结果 --");
process.stdout.write(res.stdout);
if (res.stderr) process.stdout.write(`-- stderr --\n${res.stderr}`);
if (res.stdlog) process.stdout.write(`-- stdlog --\n${res.stdlog}`);
console.log(`-- exitCode ${res.exitCode} --`);
