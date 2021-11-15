import { useColorModeValue } from "@chakra-ui/react";

export default ({ space, colors, fonts, radii }: any) => ({
  hljs: {
    display: "block",
    overflowX: "auto",
    padding: space[2],
    background: "white",
    color: useColorModeValue(colors.black, colors.gray[50]),
    fontFamily: fonts.mono,
    backgroundColor: useColorModeValue(colors.gray[50], colors.gray[850]),
    borderRadius: radii.sm,
    borderWidth: "1px",
    borderColor: useColorModeValue(colors.gray[100], colors.gray[800]),
  },
  "hljs-comment": {
    color: colors.gray[500],
  },
  "hljs-quote": {
    color: colors.green[700],
  },
  "hljs-variable": {
    color: colors.teal[600],
  },
  "hljs-keyword": {
    color: colors.purple[600],
  },
  "hljs-selector-tag": {
    color: colors.indigo[600],
  },
  "hljs-built_in": {
    color: colors.indigo[600],
  },
  "hljs-name": {
    color: colors.indigo[600],
  },
  "hljs-tag": {
    color: colors.indigo[600],
  },
  "hljs-string": {
    color: colors.green[600],
  },
  "hljs-title": {
    color: useColorModeValue(colors.red[800], colors.red[700]),
  },
  "hljs-section": {
    color: useColorModeValue(colors.red[800], colors.red[700]),
  },
  "hljs-attribute": {
    color: useColorModeValue(colors.red[800], colors.red[700]),
  },
  "hljs-literal": {
    color: colors.orange[600],
  },
  "hljs-template-tag": {
    color: colors.orange[600],
  },
  "hljs-template-variable": {
    color: useColorModeValue(colors.red[800], colors.red[700]),
  },
  "hljs-type": {
    color: useColorModeValue(colors.red[800], colors.red[700]),
  },
  "hljs-addition": {
    color: useColorModeValue(colors.red[800], colors.red[700]),
  },
  "hljs-deletion": {
    color: useColorModeValue(colors.cyan[800], colors.cyan[500]),
  },
  "hljs-selector-attr": {
    color: useColorModeValue(colors.cyan[800], colors.cyan[500]),
  },
  "hljs-selector-pseudo": {
    color: useColorModeValue(colors.cyan[800], colors.cyan[500]),
  },
  "hljs-meta": {
    color: useColorModeValue(colors.cyan[800], colors.cyan[500]),
  },
  "hljs-doctag": {
    color: colors.gray[800],
  },
  "hljs-attr": {
    color: useColorModeValue(colors.red[800], colors.red[700]),
  },
  "hljs-symbol": {
    color: useColorModeValue(colors.purple[800], colors.purple[700]),
  },
  "hljs-bullet": {
    color: useColorModeValue(colors.purple[800], colors.purple[700]),
  },
  "hljs-link": {
    color: colors.blue[500],
  },
  "hljs-emphasis": {
    fontStyle: "italic",
  },
  "hljs-strong": {
    fontWeight: "bold",
  },
});
