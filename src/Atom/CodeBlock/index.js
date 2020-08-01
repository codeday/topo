/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box from 'topo/Atom/Box';
import { useTheme } from 'topo/utils';
import makeStyle from './make-style';

let SyntaxHighlighter;
try {
  ({ LightAsync: SyntaxHighlighter } = require('react-syntax-highlighter'));
// eslint-disable-next-line no-empty
} catch (ex) {}

const SH = forwardRef(({ lang, numbers, ...props }, ref) => {
  const theme = useTheme();

  if (typeof SyntaxHighlighter === 'undefined') {
    return (
      <Box bg="red.500" color="white" fontWeight="bold" p={2}>
        Optional dependency react-syntax-highlighter must be installed to use CodeBlock.
      </Box>
    );
  }

  return (
    <SyntaxHighlighter
      ref={ref}
      language={lang}
      showLineNumbers={numbers || false}
      lineNumberContainerProps={{
        'aria-hidden': true,
        style: {
          borderRightColor: theme.colors.gray[200],
          borderRightWidth: '1px',
          float: 'left',
          paddingRight: theme.space[1],
          marginRight: theme.space[4],
        },
      }}
      lineNumberProps={{ style: { color: theme.colors.gray[500] } }}
      style={makeStyle(theme)}
      {...props}
    />
  );
});
SH.propTypes = {
  lang: PropTypes.string.isRequired,
  numbers: PropTypes.bool,
};
SH.defaultProps = {
  numbers: false,
};
export default SH;
