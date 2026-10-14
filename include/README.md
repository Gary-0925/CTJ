# include

转译时提供给 `#include` 的头文件集合。构建时 `scripts/build.js` 会遍历本目录，
按 `#include` 中书写的相对路径为键生成外层目录的 `include.json`，
`CTJ.transpile` 的 `headers` 参数就是它的内容。

共 334 个文件（其中 `include.json` 含 333 个头文件，`gnu/stubs-x32.h` 为空桩）：

| 位置 | 数量 | 说明 |
| --- | --- | --- |
| `*.h`（C 头文件） | 37 | 其中 `assert.h ctype.h errno.h math.h stdio.h stdlib.h string.h time.h` 为 glibc 原版，其余为 CTJ 手写或空壳，见下 |
| `bits/`、`sys/`、`gnu/`、`linux/`、`asm/`、`asm-generic/` | 约 200 | glibc 原版，供上面的 C 头文件闭包引用 |
| `ctj_lib/` | 5 | libstdc++ 中不是头文件的 `.cc` 源文件，按需挂载，见下 |
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
- `stddef.h` 提供 `size_t` / `ptrdiff_t` / `NULL` / `offsetof`。
- `x86intrin.h` 是空壳：`bits/opt_random.h` 无条件包含它，只需要让包含成功。

`uchar.h` 是 glibc 原版；`iso646.h` 取自 GCC（在 C++ 下不定义任何宏，`and`、`not` 等关键字由词法分析器直接识别，见 `src/lexer.ts` 的 `ALT_TOKENS`）；`cuchar` 是 libstdc++ 的转发头，取自 GCC。`bits/types/mbstate_t.h` 是 CTJ 的垫片，内容只是包含 `<wchar.h>`，因为本目录的 `wchar.h` 已经定义了 `mbstate_t`，不能再直接使用 glibc 的同名 typedef。

`mbrtoc16`、`mbrtoc32`、`c16rtomb`、`c32rtomb` 在 `src/libc/stdlib.ts` 中实现，按 C locale（仅 ASCII）处理。

`strstream` 没有提供：它依赖 `streambuf` 的缓冲，而 CTJ 的 `ostream` 直接输出、不经过 `streambuf`，`ostrstream` 会把内容写到标准输出而不是缓冲区。它是 C++98 遗留的已弃用头文件，同 `sstream`、`fstream` 一样，目前不支持。

## 库源文件（ctj_lib）

libstdc++ 有一些函数声明在头文件里、定义在 `src/*.cc` 中（链接时才会有），CTJ 只读取头文件，所以这些定义放在 `ctj_lib/` 中，原样拷贝自 GCC 4.8.1。

- `ctj_lib/tree.cc`：`_Rb_tree` 的插入、删除后的重新平衡、`increment`、`decrement`，由 `bits/stl_tree.h` 挂载。
- `ctj_lib/list.cc`：`_List_node_base` 的 `_M_hook`、`_M_unhook`、`_M_transfer`、`_M_reverse`、`swap`，由 `bits/stl_list.h` 挂载。

库文件中的全局变量（如 `__prime_list`）在程序自己的全局变量之前初始化，与 libstdc++ 在 `main` 之前已经就绪一致；函数内的 `static` 变量则最先声明。

挂载在 `src/pre.ts` 的 `LIBRARY_SOURCES` 中进行：包含某个头文件时，对应的 `.cc` 会在翻译单元的末尾被预处理。没有被程序引用的函数不会输出，所以挂载只增加解析时间。

- `ctj_lib/hash_bytes.cc`：`std::_Hash_bytes`、`_Fnv_hash_bytes`，由 `bits/hash_bytes.h` 挂载。
- `ctj_lib/hashtable_c++0x.cc`：`_Prime_rehash_policy::_M_next_bkt`、`_M_need_rehash`，由 `bits/hashtable_policy.h` 挂载。它通过 `#include "hashtable-aux.cc"` 带入同目录的素数表 `hashtable-aux.cc`（原文为 `../shared/hashtable-aux.cc`，改为同目录的相对路径，因为这里的目录布局与 libstdc++ 不同）。

`ctj_lib/` 中的文件都是 GCC 4.8.1 原版，只有上面这一处 `#include` 路径做了修改。

CTJ 的数据模型是 ILP32（`long`、`size_t`、指针都是 32 位，见 `src/pre.ts` 的 `__SIZEOF_LONG__`、`__SIZEOF_SIZE_T__`）。因此 libstdc++ 按 32 位分支选择素数表与哈希算法，`std::hash` 的值与 unordered 容器的迭代顺序和 g++（x86_64，LP64）不同。这是有意的取舍：改用 LP64 会让指针变成 BigInt，运行会明显变慢；unordered 容器的迭代顺序本来就没有保证。

只剩下 `src/js.ts` 中的 `allocStub`（`operator new` / `operator delete`）仍为手写，因为存储由目标语言提供，原版没有可挂载的源码。

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
