/* Portable <stdio.h> for CTJ. */
#ifndef _CTJ_STDIO_H
#define _CTJ_STDIO_H

#include <stddef.h>
#include <stdarg.h>

#define EOF (-1)
#define SEEK_SET 0
#define SEEK_CUR 1
#define SEEK_END 2
#define BUFSIZ 8192
#define FILENAME_MAX 4096
#define L_tmpnam 20
#define TMP_MAX 238328
#define FOPEN_MAX 16
#define _IOFBF 0
#define _IOLBF 1
#define _IONBF 2

struct _IO_FILE { int __fd; int __dummy; };

typedef struct _IO_FILE FILE;
typedef unsigned long fpos_t;

FILE __ctj_stdin_file = {0, 0};
FILE __ctj_stdout_file = {1, 0};
FILE __ctj_stderr_file = {2, 0};
FILE* stdin = &__ctj_stdin_file;
FILE* stdout = &__ctj_stdout_file;
FILE* stderr = &__ctj_stderr_file;

#ifdef __cplusplus
extern "C" {
#endif

/* The formatting is one JavaScript function, installed on first use and shared by
   every call. Mode 1 writes to stdout, mode 2 to stderr, mode 0 into the buffer
   dst of size n; the result is the number of characters. */
#define _CTJ_VFMT_JS \
  "($io.vf || ($io.vf = " \
  "function (mode, dst, n, fmt, ap) { " \
    "function toStr(q) { " \
  "if (q === null || q === undefined) return '(null)'; " \
  "var a = q.a, i = q.i | 0, r = '', x; " \
  "if (typeof a === 'string') return a.slice(i); " \
  "for (; ; i++) { " \
  "x = a[i]; " \
  "if (x === undefined || x === null || x === 0) break; " \
  "r += typeof x === 'number' ? String.fromCharCode(x & 255) : String(x); " \
  "} " \
  "return r; " \
  "} " \
  "function isDigit(c) { return c.length === 1 && c >= '0' && c <= '9'; } " \
  "function toBig(x) { " \
  "if (typeof x === 'bigint') return x; " \
  "if (typeof x === 'boolean') return x ? 1n : 0n; " \
  "x = Number(x); " \
  "return isFinite(x) ? BigInt(Math.trunc(x)) : 0n; " \
  "} " \
  "function spaces(k) { return k > 0 ? new Array(k + 1).join(' ') : ''; } " \
  "function zeros(k) { return k > 0 ? new Array(k + 1).join('0') : ''; } " \
  "function numPad(sign, body, w, fl, zeroOK) { " \
  "var len = sign.length + body.length; " \
  "if (w <= len) return sign + body; " \
  "if (fl.indexOf('-') >= 0) return sign + body + spaces(w - len); " \
  "if (zeroOK && fl.indexOf('0') >= 0) return sign + zeros(w - len) + body; " \
  "return spaces(w - len) + sign + body; " \
  "} " \
  "function fixedStr(a, p) { " \
  "var s = a.toFixed(p), y = a * Math.pow(10, p), fl0 = Math.floor(y), d; " \
  "if (p <= 40 && y < 9007199254740992 && y - fl0 === 0.5 && fl0 % 2 === 0) { " \
  "d = String(fl0); " \
  "while (d.length <= p) d = '0' + d; " \
  "s = p > 0 ? d.slice(0, d.length - p) + '.' + d.slice(d.length - p) : d; " \
  "} " \
  "return s; " \
  "} " \
  "function fixExp(s) { " \
  "var k = s.indexOf('e'), e = s.slice(k + 2); " \
  "if (e.length < 2) e = '0' + e; " \
  "return s.slice(0, k + 2) + e; " \
  "} " \
  "function stripZeros(t) { " \
  "var k = t.indexOf('e'), m = k < 0 ? t : t.slice(0, k), ex = k < 0 ? '' : t.slice(k); " \
  "if (m.indexOf('.') >= 0) { " \
  "while (m.charAt(m.length - 1) === '0') m = m.slice(0, -1); " \
  "if (m.charAt(m.length - 1) === '.') m = m.slice(0, -1); " \
  "} " \
  "return m + ex; " \
  "} " \
  "function write(t, fd) { if (t) $io.write(fd, t); } " \
  "function next() { return ap.a[ap.i++]; } " \
  "var f = toStr(fmt), out = '', i = 0, c, fl, w, pr, L, conv; " \
  "while (i < f.length) { " \
  "c = f.charAt(i++); " \
  "if (c !== '%') { out += c; continue; } " \
  "fl = ''; " \
  "while (i < f.length && '-+ #0'.indexOf(f.charAt(i)) >= 0) fl += f.charAt(i++); " \
  "w = 0; " \
  "if (f.charAt(i) === '*') { " \
  "w = Number(toBig(next())); " \
  "i++; " \
  "if (w < 0) { fl += '-'; w = -w; } " \
  "} else { " \
  "while (isDigit(f.charAt(i))) w = w * 10 + f.charCodeAt(i++) - 48; " \
  "} " \
  "pr = -1; " \
  "if (f.charAt(i) === '.') { " \
  "i++; " \
  "pr = 0; " \
  "if (f.charAt(i) === '*') { " \
  "pr = Number(toBig(next())); " \
  "i++; " \
  "} else { " \
  "while (isDigit(f.charAt(i))) pr = pr * 10 + f.charCodeAt(i++) - 48; " \
  "} " \
  "} " \
  "L = ''; " \
  "while (i < f.length && 'hlLqjzt'.indexOf(f.charAt(i)) >= 0) L += f.charAt(i++); " \
  "conv = f.charAt(i++); " \
  "if (conv === '') { out += '%'; break; } " \
  "if (conv === '%') { out += '%'; continue; } " \
  "if ('diuoxX'.indexOf(conv) >= 0) { " \
  "var wide = L === 'll' || L === 'q' || L === 'j' || L === 'L'; " \
  "var bits = wide ? 64 : L === 'hh' ? 8 : L === 'h' ? 16 : 32; " \
  "var signed = conv === 'd' || conv === 'i'; " \
  "var v = toBig(next()); " \
  "v = signed ? BigInt.asIntN(bits, v) : BigInt.asUintN(bits, v); " \
  "var neg = signed && v < 0n; " \
  "var mag = neg ? -v : v; " \
  "var ds = conv === 'o' ? mag.toString(8) : conv === 'x' ? mag.toString(16) : conv === 'X' ? mag.toString(16).toUpperCase() : mag.toString(10); " \
  "if (pr >= 0) { " \
  "if (pr === 0 && mag === 0n) ds = ''; " \
  "while (ds.length < pr) ds = '0' + ds; " \
  "} " \
  "var pre = ''; " \
  "if (neg) pre = '-'; " \
  "else if (signed && fl.indexOf('+') >= 0) pre = '+'; " \
  "else if (signed && fl.indexOf(' ') >= 0) pre = ' '; " \
  "if (fl.indexOf('#') >= 0 && mag !== 0n) { " \
  "if (conv === 'x') pre += '0x'; " \
  "else if (conv === 'X') pre += '0X'; " \
  "else if (conv === 'o' && ds.charAt(0) !== '0') ds = '0' + ds; " \
  "} " \
  "out += numPad(pre, ds, w, fl, pr < 0); " \
  "} else if (conv === 'c') { " \
  "out += numPad('', String.fromCharCode(Number(toBig(next()) & 255n)), w, fl, false); " \
  "} else if (conv === 's') { " \
  "var sv = toStr(next()); " \
  "if (pr >= 0) sv = sv.slice(0, pr); " \
  "out += numPad('', sv, w, fl, false); " \
  "} else if (conv === 'p') { " \
  "var pv = next(), ps; " \
  "if (pv === null || pv === undefined) ps = '(nil)'; " \
  "else { " \
  "if (typeof pv === 'object' && pv.ctjAddr === undefined) { " \
  "$io.addr = ($io.addr || 0) + 1; " \
  "pv.ctjAddr = 4096 + 16 * $io.addr; " \
  "} " \
  "ps = '0x' + (typeof pv === 'object' ? pv.ctjAddr : 0).toString(16); " \
  "} " \
  "out += numPad('', ps, w, fl, false); " \
  "} else if ('fFeEgGaA'.indexOf(conv) >= 0) { " \
  "var x = Number(next()); " \
  "var p = pr < 0 ? 6 : pr; " \
  "var sg = (x < 0 || (x === 0 && 1 / x < 0)) ? '-' : fl.indexOf('+') >= 0 ? '+' : fl.indexOf(' ') >= 0 ? ' ' : ''; " \
  "var ax = Math.abs(x), t; " \
  "if (x !== x) t = 'nan'; " \
  "else if (ax === Infinity) t = 'inf'; " \
  "else if (conv === 'f' || conv === 'F') t = fixedStr(ax, p); " \
  "else if (conv === 'e' || conv === 'E') t = fixExp(ax.toExponential(p)); " \
  "else { " \
  "var P = p === 0 ? 1 : p; " \
  "var es = ax.toExponential(P - 1); " \
  "var X = parseInt(es.slice(es.indexOf('e') + 1), 10); " \
  "t = X < -4 || X >= P ? fixExp(es) : fixedStr(ax, P - 1 - X); " \
  "if (fl.indexOf('#') < 0) t = stripZeros(t); " \
  "} " \
  "if (conv === conv.toUpperCase()) t = t.toUpperCase(); " \
  "out += numPad(sg, t, w, fl, isFinite(x)); " \
  "} else if (conv === 'n') { " \
  "var tg = next(); " \
  "if (tg) tg.a[tg.i] = out.length; " \
  "} else { " \
  "out += '%' + conv; " \
  "} " \
  "} " \
  "if (mode !== 0) { " \
  "write(out, mode === 2 ? 2 : 1); " \
  "return out.length; " \
  "} " \
  "if (dst && n > 0) { " \
  "var m = Math.min(out.length, n - 1), k; " \
  "for (k = 0; k < m; k++) dst.a[dst.i + k] = out.charCodeAt(k) & 255; " \
  "dst.a[dst.i + m] = 0; " \
  "} " \
  "return out.length; " \
  "} " \
  "))($1, $2, $3, $4, $5)"

static inline int fputs(const char* s, FILE* stream) { return fprintf(stream, "%s", s) < 0 ? EOF : 0; }
static inline int fputc(int c, FILE* stream) { return fprintf(stream, "%c", c) < 0 ? EOF : c; }
static inline int putc(int c, FILE* stream) { return fputc(c, stream); }
static inline int putchar(int c) { return printf("%c", c) < 0 ? EOF : c; }
static inline int puts(const char* s) { return printf("%s\n", s) < 0 ? EOF : 1; }

static inline int vprintf(const char* fmt, va_list ap) { return __ctj_js(_CTJ_VFMT_JS, 1, 0, 0, fmt, ap); }
static inline int vfprintf(FILE* stream, const char* fmt, va_list ap) { return __ctj_js(_CTJ_VFMT_JS, stream->__fd == 2 ? 2 : 1, 0, 0, fmt, ap); }
static inline int vsprintf(char* s, const char* fmt, va_list ap) { return __ctj_js(_CTJ_VFMT_JS, 0, s, (size_t)-1, fmt, ap); }
static inline int vsnprintf(char* s, size_t n, const char* fmt, va_list ap) { return __ctj_js(_CTJ_VFMT_JS, 0, s, n, fmt, ap); }

static inline int printf(const char* fmt, ...) {
  va_list ap;
  va_start(ap, fmt);
  int r = vprintf(fmt, ap);
  va_end(ap);
  return r;
}
static inline int fprintf(FILE* stream, const char* fmt, ...) {
  va_list ap;
  va_start(ap, fmt);
  int r = vfprintf(stream, fmt, ap);
  va_end(ap);
  return r;
}
static inline int sprintf(char* s, const char* fmt, ...) {
  va_list ap;
  va_start(ap, fmt);
  int r = vsprintf(s, fmt, ap);
  va_end(ap);
  return r;
}
static inline int snprintf(char* s, size_t n, const char* fmt, ...) {
  va_list ap;
  va_start(ap, fmt);
  int r = vsnprintf(s, n, fmt, ap);
  va_end(ap);
  return r;
}
int scanf(const char* fmt, ...);
int fscanf(FILE* stream, const char* fmt, ...);
int sscanf(const char* s, const char* fmt, ...);
int vscanf(const char* fmt, va_list ap);
int vfscanf(FILE* stream, const char* fmt, va_list ap);
int vsscanf(const char* s, const char* fmt, va_list ap);

int fgetc(FILE* stream);
char* fgets(char* s, int n, FILE* stream);
int getc(FILE* stream);
int getchar(void);
char* gets(char* s);
int ungetc(int c, FILE* stream);

size_t fread(void* ptr, size_t size, size_t nmemb, FILE* stream);
size_t fwrite(const void* ptr, size_t size, size_t nmemb, FILE* stream);
int fseek(FILE* stream, long offset, int whence);
long ftell(FILE* stream);
void rewind(FILE* stream);
int fgetpos(FILE* stream, fpos_t* pos);
int fsetpos(FILE* stream, const fpos_t* pos);
void clearerr(FILE* stream);
int feof(FILE* stream);
int ferror(FILE* stream);
void perror(const char* s);

FILE* fopen(const char* path, const char* mode);
FILE* freopen(const char* path, const char* mode, FILE* stream);
int fclose(FILE* stream);
int fflush(FILE* stream);
int remove(const char* path);
int rename(const char* oldp, const char* newp);
FILE* tmpfile(void);
char* tmpnam(char* s);
int setvbuf(FILE* stream, char* buf, int mode, size_t size);
void setbuf(FILE* stream, char* buf);
int fwide(FILE* stream, int mode);

#ifdef __cplusplus
}
#endif

#endif
