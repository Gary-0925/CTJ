// <math.h>: the functions of the C library's math, in double precision.  The
// float variants (suffix f) round the result to single precision; the long
// double variants (suffix l) are the double ones, since long double is double.
namespace CTJ {
  // $L is the object of helpers that the generated program declares once.
  declare const $L: any;

  // Registers the function base and its variants, whose result is the JavaScript expression expr in x and y.
  function defMath(base: string, expr: string): void {
    const body = (e: string) => `(a) => { const x = a[0], y = a[1]; return ${e}; }`;
    libcDefSource([base, base + "l", "__" + base, "__" + base + "l"], body(expr));
    libcDefSource([base + "f", "__" + base + "f"], body(`Math.fround(${expr})`));
  }

  // Functions of one argument.
  const UNARY: [string, string][] = [
    ["sin", "Math.sin(x)"],
    ["cos", "Math.cos(x)"],
    ["tan", "Math.tan(x)"],
    ["asin", "Math.asin(x)"],
    ["acos", "Math.acos(x)"],
    ["atan", "Math.atan(x)"],
    ["sinh", "Math.sinh(x)"],
    ["cosh", "Math.cosh(x)"],
    ["tanh", "Math.tanh(x)"],
    ["asinh", "Math.asinh(x)"],
    ["acosh", "Math.acosh(x)"],
    ["atanh", "Math.atanh(x)"],
    ["exp", "Math.exp(x)"],
    ["exp2", "Math.pow(2, x)"],
    ["exp10", "Math.pow(10, x)"],
    ["expm1", "Math.expm1(x)"],
    ["log", "Math.log(x)"],
    ["log2", "Math.log2(x)"],
    ["log10", "Math.log10(x)"],
    ["log1p", "Math.log1p(x)"],
    ["sqrt", "Math.sqrt(x)"],
    ["cbrt", "Math.cbrt(x)"],
    ["fabs", "Math.abs(x)"],
    ["floor", "Math.floor(x)"],
    ["ceil", "Math.ceil(x)"],
    ["trunc", "Math.trunc(x)"],
    ["round", "$L.round(x)"],
    ["rint", "$L.rint(x)"],
    ["nearbyint", "$L.rint(x)"],
    ["logb", "$L.logb(x)"],
    ["significand", "$L.scalbn(x, -$L.ilogb(x))"],
  ];

  // Functions of two arguments.
  const BINARY: [string, string][] = [
    ["pow", "$L.pow(x, y)"],
    ["atan2", "Math.atan2(x, y)"],
    ["fmod", "x % y"],
    ["hypot", "Math.hypot(x, y)"],
    ["copysign", "$L.copysign(x, y)"],
    ["fmax", "$L.fmax(x, y)"],
    ["fmin", "$L.fmin(x, y)"],
    ["fdim", "(x > y ? x - y : x !== x || y !== y ? NaN : 0)"],
    ["nextafter", "$L.nextafter(x, y)"],
    ["nexttoward", "$L.nextafter(x, y)"],
    ["remainder", "$L.remainder(x, y)"],
    ["drem", "$L.remainder(x, y)"],
    ["scalb", "(Number.isInteger(y) ? $L.scalbn(x, y) : NaN)"],
    ["ldexp", "$L.scalbn(x, y)"],
    ["scalbn", "$L.scalbn(x, y)"],
    ["scalbln", "$L.scalbn(x, y)"],
  ];

  for (const [base, expr] of UNARY.concat(BINARY)) defMath(base, expr);

  // Classification and the integer results.
  libcDef(["isinf", "__isinf", "isinff", "isinfl"], (a: any[]) => (a[0] === Infinity ? 1 : a[0] === -Infinity ? -1 : 0));
  libcDef(["isnan", "__isnan", "isnanf", "isnanl"], (a: any[]) => (a[0] !== a[0] ? 1 : 0));
  libcDef(["finite", "__finite", "finitef", "finitel"], (a: any[]) => (isFinite(a[0]) ? 1 : 0));
  libcDef(["ilogb", "ilogbf", "ilogbl"], (a: any[]) => $L.ilogb(a[0]));
  // Out of range, the conversions give the most negative value, as on x86.
  libcDef(["lrint", "lrintf", "lrintl"], (a: any[]) => {
    const r = $L.rint(a[0]);
    return r >= -2147483648 && r <= 2147483647 ? r : -2147483648;
  });
  libcDef(["lround", "lroundf", "lroundl"], (a: any[]) => {
    const r = $L.round(a[0]);
    return r >= -2147483648 && r <= 2147483647 ? r : -2147483648;
  });
  libcDef(["llrint", "llrintf", "llrintl"], (a: any[]) => {
    const r = $L.rint(a[0]);
    return r >= -9223372036854775808 && r < 9223372036854775808 ? BigInt(r) : -(BigInt(1) << BigInt(63));
  });
  libcDef(["llround", "llroundf", "llroundl"], (a: any[]) => {
    const r = $L.round(a[0]);
    return r >= -9223372036854775808 && r < 9223372036854775808 ? BigInt(r) : -(BigInt(1) << BigInt(63));
  });

  // Splitting into fraction and exponent, and into integral and fractional parts.
  libcDef(["frexp", "frexpf", "frexpl"], (a: any[]) => $L.frexp(a[0], a[1]));
  libcDef(["modf", "modff", "modfl"], (a: any[]) => $L.modf(a[0], a[1]));
  libcDef(["remquo", "remquof", "remquol"], (a: any[]) => {
    const r = $L.remainder(a[0], a[1]);
    const q = (a[0] - r) / a[1];
    if (isFinite(q)) $L.put(a[2], 0, q | 0);
    return r;
  });

  libcDef(["fma", "fmal", "__fma"], (a: any[]) => $L.fma(a[0], a[1], a[2]));
  libcDef(["fmaf", "__fmaf"], (a: any[]) => Math.fround($L.fma(a[0], a[1], a[2])));

  // NaN, whatever the tag.
  libcDef(["nan", "nanf", "nanl"], () => NaN);

  // The float nextafter steps through single precision values.
  libcDef(["nextafterf", "nexttowardf", "__nextafterf"], (a: any[]) => {
    const x = a[0];
    const y = a[1];
    if (x !== x || y !== y) return NaN;
    if (x === y) return y;
    if (x === 0) return y > 0 ? 1.401298464324817e-45 : -1.401298464324817e-45;
    const dv = new DataView(new ArrayBuffer(4));
    dv.setFloat32(0, x);
    const bits = dv.getUint32(0);
    const away = y > x === x > 0;
    dv.setUint32(0, away ? bits + 1 : bits - 1);
    return dv.getFloat32(0);
  });
}
