// Public API: transpile(source, options) runs the whole pipeline and returns the
// JavaScript together with run(input), which executes the program.
namespace CTJ {
  export interface TranspileOptions {
    headers?: Record<string, string>;
    defines?: Record<string, string>;
  }

  export interface RunResult {
    stdout: string;
    stderr: string;
    stdlog: string;
    exitCode: number;
  }

  export interface TranspileResult {
    code: string;
    warnings: string[];
    // Runs the program once with input as its standard input (cin).  Every call
    // starts from the beginning, with fresh globals.
    run(input?: string): RunResult;
  }

  interface Program {
    run(input?: string): RunResult;
  }

  export function transpile(source: string, options: TranspileOptions): TranspileResult {
    const headers = options.headers || {};
    const pre = new Preprocessor(path => (path in headers ? headers[path] : null), []);
    const defines = options.defines || {};
    for (const k of Object.keys(defines)) {
      const toks = lexFile(defines[k], "<define>", false);
      toks.pop();
      pre.macros.set(k, { params: null, variadic: false, body: toks });
    }
    const pres = pre.run(source, "main.cpp");
    if (pres.missing.length) throw new Error(`missing headers: ${pres.missing.join(", ")}`);
    const parser = new Parser(pres.tokens);
    const tu = parser.parseTU();
    const cx = new Cx();
    analyzeAll(cx, tu);
    const code = emitJs(cx);
    const program = new Function(code)() as Program;
    // Parse errors inside the bundled glibc headers (e.g. the _Float128 / _Complex
    // declarations in bits/floatn.h) are skipped on purpose: CTJ has no such types and
    // the user cannot act on them, so they are not reported.
    const fromHeader = (w: string) => {
      const m = /^(.*):\d+: /.exec(w);
      return m !== null && m[1] in headers;
    };
    return {
      code,
      warnings: [...pres.warnings, ...parser.warnings.filter(w => !fromHeader(w)), ...cx.warnings],
      run: (input?: string) => program.run(input),
    };
  }
}

(function (): void {
  const g = globalThis as unknown as Record<string, unknown>;
  g["CTJ"] = CTJ;
})();
