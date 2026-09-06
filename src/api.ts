namespace CTJ {

export interface TranspileOptions {
  target: "js" | "php";
  headers?: Record<string, string>;
  defines?: Record<string, string>;
}

export interface TranspileResult {
  code: string;
  warnings: string[];
}

export function transpile(source: string, options: TranspileOptions): TranspileResult {
  const headers = options.headers || {};
  const pre = new Preprocessor(path => (path in headers ? headers[path] : null), []);
  const defines = options.defines || {};
  for (const k of Object.keys(defines)) {
    const toks = lexFile(defines[k], "<define>");
    toks.pop();
    pre.macros.set(k, { params: null, variadic: false, body: toks });
  }
  const pres = pre.run(source, "main.cpp");
  if (pres.missing.length) throw new Error(`missing headers: ${pres.missing.join(", ")}`);
  const parser = new Parser(pres.tokens);
  const tu = parser.parseTU();
  const cx = new Cx();
  analyzeAll(cx, tu);
  const code = options.target === "php" ? emitPhp(cx) : emitJs(cx);
  return { code, warnings: [...pres.warnings, ...cx.warnings] };
}

}

(function (): void {
  const g = globalThis as unknown as Record<string, unknown>;
  g["CTJ"] = CTJ;
})();
