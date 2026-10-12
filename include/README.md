# include

转译时提供给 `#include` 的头文件集合。构建时 `scripts/build.js` 会遍历本目录，
按 `#include` 中书写的相对路径为键生成外层目录的 `include.json`，
`CTJ.transpile` 的 `headers` 参数就是它的内容。

共 239 个文件：

| 位置 | 数量 | 说明 |
| --- | --- | --- |
| `*.h`（C 头文件） | 25 | 为 CTJ 手写，见下 |
| `bits/` | 124 | libstdc++ 4.8.1 原版实现头文件 |
| 顶层 C++ 头文件 | 80 | libstdc++ 4.8.1 原版，如 `vector`、`string`、`type_traits` |
| `ext/` | 7 | `atomicity.h`、`new_allocator.h` 为 GCC 4.8 原版；`alloc_traits.h`、`concurrence.h`、`numeric_traits.h`、`string_conversions.h`、`type_traits.h` 为 CTJ 补写 |
| `debug/`、`backward/` | 3 | `debug/debug.h`、`backward/binders.h`、`backward/auto_ptr.h`，为 CTJ 补写 |

## C 头文件

`assert.h ctype.h errno.h float.h inttypes.h limits.h locale.h math.h pthread.h
sched.h setjmp.h signal.h stdalign.h stdarg.h stdbool.h stddef.h stdint.h
stdio.h stdlib.h string.h time.h unistd.h wchar.h wctype.h x86intrin.h`

其中：

- `string.h`、`math.h`、`stdlib.h` 里的函数带有实现，会被一起转译，因此转译结果仍然没有外部依赖。
- `stdio.h` 只给出声明：`printf` 一族需要可变参数与目标语言的 I/O，没有实现，调用会在运行时抛出 `unresolved external`。要输出请用 `__ctj_js` / `__ctj_php`。
- `stddef.h` 提供 `size_t` / `ptrdiff_t` / `NULL` / `offsetof`。
- `x86intrin.h` 是空壳：`bits/opt_random.h` 无条件包含它，只需要让包含成功。

## 输出流

`<ostream>`、`<iostream>`、`<ios>`、`<iomanip>`、`<istream>` 为 CTJ 手写，不使用 libstdc++ 原版，
输出直接在头文件中通过 `__ctj_js` / `__ctj_php` 实现（`include/ostream` 中的 `_CTJ_OUT_JS` / `_CTJ_OUT_PHP`），
转译器对 `ostream` 没有任何特判。`cout` / `cerr` / `clog` 目前都写到标准输出。
`cin` 也是 CTJ 手写（`include/istream`）：整数、浮点、`char`、`bool`、`std::string` 的 `>>`，以及 `get` / `ignore` / `getline`（`char*` 与 `string` 两种）已实现，输入来自 `globalThis.__ctjin`（JS）或 `$GLOBALS['__ctjin']`（PHP），二者都没有时才读标准输入。`<sstream>`、`<fstream>` 仍是存根。

## 增删头文件

直接在目录里添加或修改文件即可，重新 `npm run build` 会刷新 `include.json`。
头文件与用户代码一起被转译，所以头文件里的实现必须是转译器能处理的 C++
（目前不支持模板偏特化，也不要依赖只在编译好的库里存在的符号）。
