const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
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
    __ctj_php("print($1 . PHP_EOL)", v);
  }
  return 0;
}
`;

const args = process.argv.slice(2);
const target = args.find(a => a === "js" || a === "php") || "js";
const file = args.find(a => !a.startsWith("-") && a !== target);
const source = file ? fs.readFileSync(file, "utf8") : SAMPLE;
const headers = loadHeaders(path.join(__dirname, "..", "include"));

console.log(`== C++ (${file || "内置示例"}) -> ${target.toUpperCase()}，标准库头文件 ${Object.keys(headers).length} 个\n`);

let result;
try {
  result = CTJ.transpile(source, { target: target, headers: headers });
} catch (e) {
  console.error(`转译失败: ${(e.file ? e.file + ":" + (e.line || 0) + ": " : "") + e.message}`);
  process.exit(1);
}
console.log(result.code);
if (result.warnings.length) {
  console.log(`-- ${result.warnings.length} 条警告 --`);
  result.warnings.slice(0, 20).forEach(w => console.log("   " + w));
}

if (target !== "js") {
  console.log("\n(PHP 结果需在服务端执行，例如 php demo.php)");
  process.exit(0);
}

const tmp = path.join(require("os").tmpdir(), `ctj-demo-${process.pid}.js`);
fs.writeFileSync(tmp, result.code);
try {
  const out = execFileSync("node", [tmp], { encoding: "utf8", timeout: 10000 });
  console.log("-- 运行结果 --");
  process.stdout.write(out);
} finally {
  fs.unlinkSync(tmp);
}
