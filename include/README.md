# include

转译时提供给 `#include` 的头文件集合。构建时 `scripts/build.js` 会遍历本目录，
按 `#include` 中书写的相对路径为键生成外层目录的 `include.json`，
`CTJ.transpile` 的 `headers` 参数就是它的内容。

共 326 个文件（其中 `include.json` 含 325 个头文件，`gnu/stubs-x32.h` 为空桩）：

| 位置 | 数量 | 说明 |
| --- | --- | --- |
| `*.h`（C 头文件） | 36 | 其中 `assert.h ctype.h errno.h math.h stdio.h stdlib.h string.h time.h` 为 glibc 原版，其余为 CTJ 手写或空壳，见下 |
| `bits/`、`sys/`、`gnu/`、`linux/`、`asm/`、`asm-generic/` | 约 200 | glibc 原版，供上面的 C 头文件闭包引用 |
| `bits/` | 124 | libstdc++ 4.8.1 原版实现头文件 |
| 顶层 C++ 头文件 | 80 | libstdc++ 4.8.1 原版，如 `vector`、`string`、`type_traits` |
| `ext/` | 7 | `atomicity.h`、`new_allocator.h` 为 GCC 4.8 原版；`alloc_traits.h`、`concurrence.h`、`numeric_traits.h`、`string_conversions.h`、`type_traits.h` 为 CTJ 补写 |
| `debug/`、`backward/` | 3 | `debug/debug.h`、`backward/binders.h`、`backward/auto_ptr.h`，为 CTJ 补写 |

## C 头文件

`assert.h ctype.h errno.h math.h stdio.h stdlib.h string.h time.h` 是 glibc 原版（版权头为 1991-2022），连同它们引用的 `bits/` 等头文件一起拷入。
这些头文件只做声明，函数的实现放在 `src/libc/*.ts` 中，由 `libcDef` 按名字挂到 C 库函数上；头文件本身没有改动。
其余 C 头文件（如 `float.h`、`limits.h`、`stdint.h`、`stddef.h` 等）仍为 CTJ 手写或空壳。

其中：

- `string.h`、`math.h`、`stdlib.h` 的函数由 `src/libc` 实现（`exit` 与 `abort` 抛出 `{ $exit: 码 }` 结束运行），会被一起转译，因此转译结果仍然没有外部依赖。
- `stdio.h` 的 `printf` 一族由 `src/libc/stdio.ts` 实现，结果写入 `$io`；`scanf` 一族没有实现，调用会在运行时抛出 `unresolved external`，输入请用 `cin`。
- `gnu/stubs-x32.h` 是空桩：glibc 的 `sys/cdefs.h` 等头文件会无条件包含它，内容只有注释，只需要让包含成功。
- `ctj_libc.h` 是替换前的 CTJ 手写 C 库声明，目前没有头文件引用它，可以删除。
- `stddef.h` 提供 `size_t` / `ptrdiff_t` / `NULL` / `offsetof`。
- `x86intrin.h` 是空壳：`bits/opt_random.h` 无条件包含它，只需要让包含成功。

## 输出流

`<ostream>`、`<iostream>`、`<ios>`、`<iomanip>`、`<istream>` 为 CTJ 手写，不使用 libstdc++ 原版，
输出直接在头文件中通过 `__ctj_js` 实现（`include/ostream` 中的 `_CTJ_OUT_JS`），
转译器对 `ostream` 没有任何特判。`cout` 写到 stdout，`cerr` 写到 stderr，`clog` 写到 stdlog（fd 1、2、3，见 `$io.write`）。
`cin` 也是 CTJ 手写（`include/istream`）：整数、浮点、`char`、`bool`、`std::string` 的 `>>`，以及 `get` / `ignore` / `getline`（`char*` 与 `string` 两种）已实现，输入来自程序对象 `run(input)` 的参数（`$io.inp`），不读取 Node 的标准输入。`<sstream>`、`<fstream>` 仍是存根。

## 来源

- 文件头第一行写有 `for CTJ` 的 34 个头文件是 CTJ 编写的替代实现（如 `<iostream>`、`<istream>`、`<ostream>`、`<iomanip>`、`<stdio.h>`、`<math.h>` 等），其余来自 GCC / libstdc++ 的原样拷贝。
- 原样拷贝中有局部修改的文件，在文件内用 CTJ 注释标出：`ext/alloc_traits.h`、`ext/concurrence.h`、`ext/type_traits.h`、`debug/debug.h`。

## 增删头文件

直接在目录里添加或修改文件即可，重新 `npm run build` 会刷新 `include.json`。
头文件与用户代码一起被转译，所以头文件里的实现必须是转译器能处理的 C++
（目前不支持模板偏特化，也不要依赖只在编译好的库里存在的符号）。
