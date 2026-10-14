// Optional builtins.  A module adds a __ctj_* builtin by registering it here when it is
// loaded.  The core refers to no particular builtin: without the module the name is just
// unknown, and the program does not compile.
namespace CTJ {
  // What the code generator offers an optional builtin.
  export interface ExtGen {
    exVal(e: Expr): string;
  }

  export interface ExtBuiltin {
    // Checks a call whose first argument is a string literal and returns its type.  What
    // emit needs later is stored with cx.getAnn(e).call.ext.
    check(cx: Cx, e: CallExpr, argTs: { t: CppType; e: Expr }[]): CppType;
    // The JavaScript for the call.
    emit(gen: ExtGen, cx: Cx, e: CallExpr): string;
    // Run-time helpers the emitted code needs.  Each program that uses the builtin gets them once.
    runtime?: string;
  }

  export const EXT_BUILTINS = new Map<string, ExtBuiltin>();
}
