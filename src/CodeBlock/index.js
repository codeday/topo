import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import makeStyle from './make-style';
import { useTheme } from '../utils';

const SH = forwardRef(({ lang, numbers, ...props }, ref) => {
  const theme = useTheme();
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
