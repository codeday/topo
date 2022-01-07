import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Box } from "topo/Atom";
import { useTheme } from "topo/utils";
import makeStyle from "./make-style";
import type {
  LightAsync,
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";

let SyntaxHighlighter: LightAsync | null = null;
try {
  ({ LightAsync: SyntaxHighlighter } = require('react-syntax-highlighter'));
  // eslint-disable-next-line no-empty
} catch (ex) { }

export const SH = ({ lang, numbers, ...props }: SyntaxHighlighterProps) => {
  if (!SyntaxHighlighter) {
    return (
      <Box bg="red.500" color="white" fontWeight="bold" p={2}>
        Optional dependency react-syntax-highlighter must be installed to use
        CodeBlock.
      </Box>
    );
  }
  const theme = useTheme();

  return (
    // @ts-ignore
    <SyntaxHighlighter
      language={lang}
      showLineNumbers={numbers || false}
      lineNumberContainerProps={{
        "aria-hidden": true,
        style: {
          borderRightColor: theme.colors.gray[200],
          borderRightWidth: "1px",
          float: "left",
          paddingRight: theme.space[1],
          marginRight: theme.space[4],
        },
      }}
      lineNumberProps={{ style: { color: theme.colors.gray[500] } }}
      style={makeStyle(theme)}
      {...props}
    />
  );
};
export { SH as CodeBlock };
