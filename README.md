# CTJ: C++ to JavaScript Transpiler

使用 TypeScript 编写的 C++ 到 JavaScript 转译器。

- 目标是完整的 C++11 标准，当前已支持的部分见下文「支持范围」。
- `src` 中的内容构建后可以得到单个 `ctj.js` 文件，页面即可调用其中接口以进行转换。
- `include` 文件夹需要与 `ctj.js` 文件放置在同一目录，其中包含 GCC 提供的标准头文件，可自行添加所需的头文件，构建时会在外层目录创建 `include.json` 包含全部的 `include` 信息以方便 `ctj.js` 调用。
- `index.html` 是一个用于演示的 playground。

这意味着你可以在 Web 前端将 C++ 代码转换为 JavaScript 并直接执行。

## 构建

```
npm install
npm run build
```

## 源码结构

`src` 下的文件在 `tsconfig.json` 中按顺序拼接成一个 `namespace CTJ`，按处理阶段分组如下。

| 阶段 | 文件 | 内容 |
| --- | --- | --- |
| 工具 | `util.ts`、`token.ts` | 通用工具、词法单元定义 |
| 词法与预处理 | `lexer.ts`、`pre.ts` | 词法分析，`#include` / `#define` / 条件编译，内置头文件表 |
| 语法 | `ast.ts`、`parser.ts`、`decl.ts`、`expr.ts`、`stmt.ts` | AST 节点定义，以及声明、表达式、语句的解析 |
| 语义模型 | `sem.ts`、`subst.ts` | 类型表示 `CppType`，程序状态 `Cx`，模板替换 |
| 语义分析 | `analyze.ts`、`types.ts`、`calls.ts`、`ctors.ts`、`conversions.ts`、`deduction.ts`、`consteval.ts`、`builtins.ts` | 为每个表达式和声明标注类型与调用目标，包括重载决议、构造函数、模板推导、常量求值与内建函数 |
| 代码生成 | `js.ts` | 把标注后的程序输出为 JavaScript |
| 接口 | `api.ts` | 见下文「接口」 |

## 接口

```js
const program = CTJ.transpile(source, {
  headers: {},                          // 路径 -> 头文件内容，通常就是 include.json 的内容
  defines: {},                          // 额外的 -D 宏
});                                     // 出错时抛出带 file / line 的异常

program.code;                           // 生成的 JavaScript：求值后得到 { run(input) }
program.warnings;                       // 转译警告
const result = program.run("114514\n"); // 运行一次，input 即 cin 的输入
// result = { stdout, stderr, stdlog, exitCode }
```

`run(input)` 每次调用都在独立的作用域里重新声明全部类、全局变量与函数，然后执行 `main()`，因此多次运行互不影响。`cout` 写入 `stdout`，`cerr` 写入 `stderr`，`clog` 写入 `stdlog`，`printf` 族写入 `stdout`（`fprintf(stderr, …)` 写入 `stderr`）。`exit(n)` 与 `abort()` 结束运行，退出码分别为 `n` 与 `134`；未捕获的运行时错误把信息写入 `stderr`，退出码为 `1`。

转译器提供内建函数 `__ctj_js`，把字符串字面量原样嵌入生成的 JavaScript，`$1`、`$2`… 会被替换为对应实参在 JavaScript 中的表达式。标准库的输出流（`include/ostream`）就是用它实现的。

指针采用胖指针模型：`int*` 转译为 `{ a: 数组, i: 下标 }`，取地址得到 `{ v: … }` 盒子，`*p` 即 `p.a[p.i]`。类转译为 `class`，虚函数依赖 JavaScript 自身的动态派发，全局对象在 `main()` 之前构造。

## Playground

`index.html` 是独立的页面，需要与 `dist/ctj.js`、`include.json` 放在同一目录并通过 HTTP 提供（页面用 `fetch` 读取 `include.json`）：

```
npm run serve          # 缺少构建产物时先构建；禁止缓存；默认端口 8000
```

或者用任何静态服务器如

```
python3 -m http.server 8080
```

打开 `http://127.0.0.1:8000/`（或 `http://127.0.0.1:8080/`）即可。左侧是 C++ 源码，右侧依次是转译得到的 JavaScript、警告、输入（stdin）和输出。「运行」会先转译再执行，Ctrl+Enter 只转译。`stderr` 与 `clog` 的内容显示在标准输出之后，非零退出码显示在最后一行。

## 命令

```
node test/demo.js a.cpp < input.txt   # 转译并运行一个文件，stdin 作为程序输入
npm test                              # 运行 test/cases 下的全部用例
```

`npm test` 会把每个 `*.cpp` 转译为 JavaScript、写入同名的 `*.out.js`、用 `node` 执行，并把输出与 `*.txt` 比对。用例可以用 `#include <...>` 引用 `include` 中的标准头文件，也可以用 `#include "..."` 引用 `test/cases` 下的头文件。

## 支持范围

已经验证可以正常转译并运行的部分：

- 基本类型、指针、引用、数组（含多维与指针运算）、`struct` / `class`、继承与虚函数（含通过基类指针的动态派发）、构造与析构、运算符重载、名字空间、`enum`、`typedef` / `using` 别名、`static` / `const` 成员、lambda、`new` / `delete`。
- 函数模板与类模板（含非类型模板参数、成员函数、默认模板实参）、模板实参推导与重载决议（同一模板可以按需实例化出多个版本）。
- 标准头文件中已经跑通并有测试覆盖的：`<cstring> <cstdlib> <cstddef> <cstdint> <climits> <limits> <exception> <new> <typeinfo> <math.h>`。
- `<vector>` 可以真正使用（见 `test/cases/16_vector.cpp`）：`bits/stl_vector.h` 与 `bits/vector.tcc` 会和用户代码一起被转译，`push_back`、`size`、`operator[]` 读写、`clear` 与按下标遍历都能运行；`std::vector<T> w = v;` 这样的拷贝构造还不行。
- 模板偏特化已经实现（见 `test/cases/15_partial_spec.cpp`），`__are_same<_Tp, _Tp>`、`__enable_if<true, _Tp>` 一类写法可用。
- 能够完整通过预处理、语法分析与代码生成，但内部模板尚未全部跑通的：`<functional> <tuple> <utility> <string> <map> <set> <initializer_list> <cmath>`。
- 整数模型按 ILP32：`int`、`unsigned`、`long`、`size_t` 与指针为 32 位，以 JavaScript 的 `number` 表示；`long long` 与 `unsigned long long` 以 `BigInt` 表示，溢出与截断按 64 位回绕。

已知限制：

- `include/` 还缺少 `bits/uniform_int_dist.h`，依赖它的 `<random>` 分布不可用。
- `<sstream>`、`<fstream>` 仍不支持。
- 标准输入输出由 `src/libc/stdio.ts` 中的 TypeScript 实现。`printf` 族（`printf`、`fprintf`、`sprintf`、`snprintf`、`puts`、`putchar` 及其 `v*` 版本）的格式化在 `vfmt` 中完成；`scanf` 族（`scanf`、`fscanf`、`sscanf` 及其 `v*` 版本）在 `vscan` 中完成，与 `cin`、`getchar` 共用同一个输入位置。`scanf` 支持 `*`、宽度、`hh h l ll L q j z t` 修饰符，转换符 `d i u o x X f e g a c s [ n p %`，返回值与 C 一致（输入结束且尚无赋值时为 `EOF`）。`%p` 读入的地址若不为 0，得到的指针只用于再次打印，不能解引用；十六进制浮点与 `inf` / `nan` 按 C 标准解析。CTJ 目前没有文件流，`fscanf` 只能读取标准输入。
- `ostringstream` 不可用。
- `std::bind` 尚不可用：`_Bind<R(A...)>` 的返回类型 `R` 为函数指针时，类型表示无法嵌套，实例化失败。
- `const T` 偏特化对 `const` 实参的区分不完整：实例键（`CppType.key()`）忽略 `const`，`A<const int>` 与 `A<int>` 共用同一实例。直接在键中加入 `const` 会改变既有的名字修饰，暂未做。
- `decltype(id)` 丢弃了声明的 `const`（`decltype(K)` 对 `const int K` 应为 `const int`）。
- `union` 中全部成员都是标量（整数、枚举、`bool`、`float`、`double`）时，成员共享同一块字节（`$bytes`，一个 `DataView`），类型双关可用（见 `test/cases/73_union_float.cpp`）。含指针或类类型成员的 `union`（如标准库内部的 `_Storage`）仍按各成员独立存放，类型双关在这类 `union` 上不成立。匿名 `struct` / `union` 成员（如 `struct { union { int a; float b; }; }`）尚未支持。
- 通过指针强转做类型双关（如 `unsigned* p = (unsigned*)&f;` 读取 `float` 的位模式）尚未支持，转译器不会报错，读到的是原来的数值，结果错误。
