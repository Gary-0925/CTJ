# CTJ: C++ Transpiler with JavaScript

使用 TypeScript 编写的 C++ 转译器。支持将 C++ 代码转译为 PHP 或 JavaScript。

- `src` 中的内容构建后可以得到单个 `ctj.js` 文件，页面即可调用其中接口以进行转换。
- 完全支持 C++11 标准。
- `include` 文件夹需要与 `ctj.js` 文件放置在同一目录，其中包含 GCC 提供的标准头文件，可自行添加所需的头文件，构建时会在外层目录创建 `include.json` 包含全部的 `include` 信息以方便 `ctj.js` 调用。
- `index.html` 是一个用于演示的 playground。

这意味着你可以在 Web 前端将 C++ 代码转换为 JavaScript 或 PHP 以便在前端或后端执行。
