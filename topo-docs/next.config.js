const { withDokz } = require("@nexite/dokz/dist/plugin");

module.exports = withDokz({
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
});
