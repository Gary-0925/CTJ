# CTJ: C++ Transpiler with JavaScript

使用 TypeScript 编写的 C++ 转译器。支持将 C++ 代码转译为 PHP 或 JavaScript。

- `src` 中的内容构建后可以得到单个 `ctj.js` 文件，页面即可调用其中接口以进行转换。
- 目标是完整的 C++11 标准，当前已支持的部分见下文「支持范围」。
- `include` 文件夹需要与 `ctj.js` 文件放置在同一目录，其中包含 GCC 提供的标准头文件，可自行添加所需的头文件，构建时会在外层目录创建 `include.json` 包含全部的 `include` 信息以方便 `ctj.js` 调用。
- `index.html` 是一个用于演示的 playground。

这意味着你可以在 Web 前端将 C++ 代码转换为 JavaScript 或 PHP 以便在前端或后端执行。

## 构建

```
npm install
npm run build
```

构建做两件事：

1. 用 `tsc` 把 `src` 编译成单文件 `dist/ctj.js`（约 470 KB，浏览器与 Node 都能直接加载，加载后全局对象上会有 `CTJ`）。
2. 遍历 `include`，把每个头文件按 `#include` 中书写的路径为键打包成仓库根目录的 `include.json`（当前 239 个头文件，约 3.7 MB）。

`dist/` 与 `include.json` 都是构建产物，已在 `.gitignore` 中排除。

## 接口

```js
CTJ.transpile(source, {
  target: "js",        // "js" | "php"
  headers: {},         // 路径 -> 头文件内容，通常就是 include.json 的内容
  defines: {},         // 额外的 -D 宏
});
// 返回 { code, warnings }，出错时抛出带 file / line 的异常
```

转译结果是完全独立的代码：没有 `require`、没有 `import`、不依赖任何运行时库，最后一行调用 `main()`。因此程序自己的输出要显式写出来，转译器提供了两个内建函数把表达式原样嵌入目标语言：

```cpp
__ctj_js("console.log($1)", x);      // 只在 JavaScript 目标下生效
__ctj_php("print($1 . PHP_EOL)", x); // 只在 PHP 目标下生效
```

`$1`、`$2`… 会被替换为对应实参在目标语言中的表达式（另一个目标下整个调用求值为空），所以同一份 C++ 源码可以同时面向两个目标。

指针采用胖指针模型：`int*` 转译为 `{a: 数组, i: 下标}`，取地址得到 `{v: …}` 盒子，`*p` 即 `p.a[p.i]`。类转译为 `class`，虚函数依赖目标语言自身的动态派发，全局对象在 `main()` 之前构造。

## Playground

`index.html` 需要与 `dist/ctj.js`、`include.json` 一起通过 HTTP 提供（`include.json` 是用 `fetch` 读取的）：

```
python3 -m http.server 8080
```

打开 `http://localhost:8080/` 即可：左侧写 C++，右侧得到目标代码，可切换 JavaScript / PHP，JavaScript 结果可以直接在页面里运行，警告与运行输出分别显示在下方。页面内置了基础语法、指针与数组、类与继承、模板、标准库头文件、PHP 后端六个示例。

## 命令行

```
npm run demo            # 转译并运行内置示例
node test/demo.js a.cpp php   # 转译指定文件到 PHP
npm test                # 运行 test/cases 下的全部用例
```

`npm test` 会把每个 `*.cpp` 转译为 JavaScript、写入同名的 `*.out.js`、用 `node` 执行，并把输出与 `*.txt` 比对。用例可以用 `#include <...>` 引用 `include` 中的标准头文件，也可以用 `#include "..."` 引用 `test/cases` 下的头文件。

## 支持范围

已经验证可以正常转译并运行的部分：

- 基本类型、指针、引用、数组（含多维与指针运算）、`struct` / `class`、继承与虚函数（含通过基类指针的动态派发）、构造与析构、运算符重载、名字空间、`enum`、`typedef` / `using` 别名、`static` / `const` 成员、lambda、`new` / `delete`。
- 函数模板与类模板（含非类型模板参数、成员函数、默认模板实参）、模板实参推导与重载决议（同一模板可以按需实例化出多个版本）。
- 标准头文件中已经跑通并有测试覆盖的：`<cstring> <cstdlib> <cstddef> <cstdint> <climits> <limits> <exception> <new> <typeinfo>`。
- 能够完整通过预处理与语法分析、但其模板尚未全部跑通的：`<utility> <vector> <string> <algorithm> <queue> <stack> <functional>`。
- `<cmath>`、`<initializer_list>` 可以用，但 `<cmath>` 的 C++ `abs` 重载与 `initializer_list` 的范围 `for` 还不行。

已知限制：

- 模板偏特化未实现（会给出警告并跳过），因此依赖 SFINAE 的 `enable_if` 一类写法不可用。`<vector> <string> <map> <set> <iostream> <sstream>` 这类依赖大量偏特化的头文件目前还转译不了：解析器会在 `include/tuple` 等处失去同步，最后连 `main` 都收集不到，只留下 `unterminated namespace body` 和 `no main function found` 两条警告。
- `include/stdio.h` 只声明了 `printf` 一族而没有实现，调用它们会在运行时抛出 `unresolved external`；请用 `__ctj_js` / `__ctj_php` 输出。
- libstdc++ 的 `iostream` / `locale` 依赖编译好的库文件，无法转译。
- 转译结果使用 JavaScript 的 `number`，`long long`、`unsigned` 等只保证在 53 位整数范围内语义一致。
