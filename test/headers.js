const fs = require("fs");
const path = require("path");

// Every file under a directory, keyed by the path the preprocessor sees in #include.
function loadHeaders(dir, extra) {
  const headers = Object.assign({}, extra);
  if (!fs.existsSync(dir)) return headers;
  (function walk(d, prefix) {
    for (const e of fs.readdirSync(d, { withFileTypes: true }).sort((a, b) => (a.name < b.name ? -1 : 1))) {
      if (/^[.#]/.test(e.name) || e.name.endsWith("~") || e.name.endsWith(".md")) continue;
      const key = prefix + e.name;
      if (e.isDirectory()) walk(path.join(d, e.name), key + "/");
      else headers[key] = fs.readFileSync(path.join(d, e.name), "utf8");
    }
  })(dir, "");
  return headers;
}

module.exports = { loadHeaders };
