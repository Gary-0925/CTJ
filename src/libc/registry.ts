// The bodies of the C library functions that the bundled headers declare but do
// not define.  A call to such a function runs the body registered here, which
// the code generator emits as a JavaScript function of the same name.
//
// A body is a TypeScript function of one argument, the array of the call's
// arguments.  It is written with the memory model of the generated code: a
// pointer is {a, i} (an array or a string, and an index into it), NULL is null,
// int, long, float and double are numbers, and long long is a BigInt.  The
// bodies are serialized with toString(), so they must not refer to anything
// outside their own text except the helpers in LIBC_HELPERS, which reach them
// as $L, and the streams of the run, which reach them as $io.
namespace CTJ {
  // $L is the object of helpers that the generated program declares once.
  declare const $L: any;

  export type LibcBody = (a: any[]) => any;

  const BODIES = new Map<string, string>();

  export function libcDef(names: string[], body: LibcBody): void {
    libcDefSource(names, body.toString());
  }

  // Registers the JavaScript source of a body, for bodies generated from text.
  export function libcDefSource(names: string[], src: string): void {
    for (const n of names) BODIES.set(n, src);
  }

  // The JavaScript of the body for a global C function, or null.
  export function libcBodySource(fq: string): string | null {
    return BODIES.get(fq) ?? null;
  }

  // The helpers, each a TypeScript function serialized into the program's $L.
  export const LIBC_HELPERS: Record<string, (...x: any[]) => any> = {};

  // The data of $L: JavaScript source of a value, such as a table.
  export const LIBC_DATA: Record<string, string> = {};

  // The lines that declare $L in a program that calls a library body.
  export function libcPrelude(): string[] {
    const lines = ["const $L = {"];
    for (const k of Object.keys(LIBC_HELPERS)) lines.push(`  ${k}: ${LIBC_HELPERS[k].toString()},`);
    for (const k of Object.keys(LIBC_DATA)) lines.push(`  ${k}: ${LIBC_DATA[k]},`);
    lines.push("};");
    lines.push("$L.init();");
    return lines;
  }
}
