# CTJ: C++ Transpiler with JavaScript

使用 TypeScript 编写的 C++ 转译器。支持将 C++ 代码转译为 JavaScript。

- `src` 中的内容构建后可以得到单个 `ctj.js` 文件，页面即可调用其中接口以进行转换。
- 目标是完整的 C++11 标准，当前已支持的部分见下文「支持范围」。
- `include` 文件夹需要与 `ctj.js` 文件放置在同一目录，其中包含 GCC 提供的标准头文件，可自行添加所需的头文件，构建时会在外层目录创建 `include.json` 包含全部的 `include` 信息以方便 `ctj.js` 调用。
- `index.html` 是一个用于演示的 playground。

这意味着你可以在 Web 前端将 C++ 代码转换为 JavaScript 并直接执行。

## 构建

```
npm install
npm run build
```

构建做两件事：

1. 用 `tsc` 把 `src` 编译成单文件 `dist/ctj.js`（约 600 KB，浏览器与 Node 都能直接加载，加载后全局对象上会有 `CTJ`）。
2. 遍历 `include`，把每个头文件按 `#include` 中书写的路径为键打包成仓库根目录的 `include.json`（当前 239 个头文件，约 3.7 MB）。

`dist/` 与 `include.json` 都是构建产物，已在 `.gitignore` 中排除。

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
| 接口 | `api.ts` | `CTJ.transpile` |

## 接口

```js
CTJ.transpile(source, {
  headers: {},         // 路径 -> 头文件内容，通常就是 include.json 的内容
  defines: {},         // 额外的 -D 宏
});
// 返回 { code, warnings }，出错时抛出带 file / line 的异常
```

转译结果是完全独立的代码：没有 `require`、没有 `import`、不依赖任何运行时库，最后一行调用 `main()`。因此程序自己的输出要显式写出来，转译器提供了内建函数 `__ctj_js` 把表达式原样嵌入生成的 JavaScript：

```cpp
__ctj_js("console.log($1)", x);
```

`$1`、`$2`… 会被替换为对应实参在 JavaScript 中的表达式。

指针采用胖指针模型：`int*` 转译为 `{a: 数组, i: 下标}`，取地址得到 `{v: …}` 盒子，`*p` 即 `p.a[p.i]`。类转译为 `class`，虚函数依赖 JavaScript 自身的动态派发，全局对象在 `main()` 之前构造。

## Playground

`index.html` 需要与 `dist/ctj.js`、`include.json` 一起通过 HTTP 提供（`include.json` 是用 `fetch` 读取的）：

```
npm run serve          # 缺少构建产物时先构建；把转译器内联进页面；禁止缓存
# 或者用任意静态服务器
python3 -m http.server 8080
```

打开 `http://localhost:8000/`（或 `http://localhost:8080/`）即可：左侧写 C++，右侧得到 JavaScript 代码，转译结果可以直接在页面里运行，警告与运行输出分别显示在下方。页面内置了基础语法、指针与数组、类与继承、模板、类模板与成员、标准库容器、标准库头文件、输入（cin）八个示例。页面下方的“输入（cin）”文本框内容会在运行前交给程序，`cin` 按空白分隔读取；选择“输入（cin）”示例时会自动填入示例数据。`npm run serve` 提供的页面已把 `dist/ctj.js` 内联进 HTML（磁盘上的 `index.html` 仍是普通的 `<script src>`），因此除 `include.json` 外不再有第二个请求——某些反向代理会缓存或拦掉对子资源脚本的请求，页面就会一直停在“转译器未加载”。若用其它静态服务器且页面提示转译器未加载，页面会带时间戳重新获取一次（先 `<script>` 标签，失败再 `fetch`），也可以强制刷新（Ctrl+Shift+R）；状态栏会写明失败原因（HTTP 状态、content-type、字节数）。就绪后状态栏还会显示构建标记（`CTJ.version`，即 commit 短哈希加构建时间）和一次自检结果：页面自己转译并运行一段 `vector` 代码，若不是 `55` 就报“自检失败”，这样“页面用的是旧构建”会直接写在脸上，而不是表现成莫名其妙的运行结果。

## 命令行

```
npm run demo            # 转译并运行内置示例
node test/demo.js a.cpp       # 转译并运行指定文件
npm test                # 运行 test/cases 下的全部用例
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

已知限制：

- `#include <algorithm>` 会让解析器在 `bits/random.tcc` 里失去同步，把后面的 `main` 一起吃掉，最后只剩一条 `no main function found`；`<algorithm>` 目前不要用（`std::max`、`std::min` 由 `bits/stl_algobase.h` 提供，随 `<vector>` 一起可用）。另外 `include/` 还缺少 `bits/uniform_int_dist.h`。
- `<iostream>` 的输出已改为 CTJ 手写的头文件实现（见 `include/ostream`），不再依赖 libstdc++ 原版；`cin` 已支持（见 `include/istream`，输入来自 `globalThis.__ctjin`，没有时才读标准输入）；`<sstream>`、`<fstream>` 仍不支持。
- `include/stdio.h` 只声明了 `printf` 一族而没有实现，调用它们会在运行时抛出 `unresolved external`；请用 `__ctj_js` 输出。
- `cerr` / `clog` 目前与 `cout` 一样写到标准输出；`ostringstream` 不可用。
- 未以换行结束的最后一行会留在 `globalThis.__ctjpend`，由宿主（如 `index.html` 的 `run()`）负责输出。
- 整数模型按 ILP32：`int`、`unsigned`、`long`、`size_t` 与指针为 32 位，以 JavaScript 的 `number` 表示；`long long` 与 `unsigned long long` 以 `BigInt` 表示，溢出与截断按 64 位回绕。
- 函数的变参（`...`、`va_arg`）没有实现，因此 `to_string` 与 `printf` 族不可用；`strtol` 一族不做溢出饱和。

## 开发约定

- 代码与注释使用英文，文档使用中文。
- 每个 `src` 文件开头用几行注释说明它的职责；函数上方的注释说明用途或不显然的原因，不复述代码。
- 格式由 Prettier 统一：`npm run format`（检查用 `npm run format:check`）。单行长度不做限制，配置见 `.prettierrc.json`。
- 行尾为 LF（`.gitattributes`），缩进为 2 个空格（`.editorconfig`）。
- 提交前运行 `npm run build && npm test`。`npm test` 会把生成的 JavaScript 写回 `test/cases/*.out.js`，若这些文件有变化，应检查后一并提交。
- `dist/` 与 `include.json` 是构建产物，不入库。
