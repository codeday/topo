/* eslint-disable global-require */
export default (...args: any[]) =>
  `@import url(https://f1.srnd.org/topo/fonts/all.css);${[
    require("./buttons"),
    require("./titles"),
    require("./text"),
    require("./fields"),
    require("./layout"),
  ]
    .map((f) => f.default(...args))
    .join(" ")
    .replace(/\n/g, " ")}`;
