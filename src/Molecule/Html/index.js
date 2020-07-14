import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Box from 'topo/Atom/Box';
import { useTheme } from 'topo/utils';

export default function Html({ children, ...props }) {
  const t = useTheme();
  const StyledBox = styled.div`
    h1, h2, h3, h4, h5, h6 {
      font-family: ${t.fonts.header};
      font-weight: bold;
      margin-bottom: 0.75em;
      padding-top: 0.5em;
    }
    h1 { font-size: ${t.fontSizes['3xl']} }
    h2 { font-size: ${t.fontSizes['2xl']} }
    h3 { font-size: ${t.fontSizes.xl} }
    h4 { font-size: ${t.fontSizes.lg} }
    h5 { font-size: ${t.fontSizes.md} }
    h6 { font-size: ${t.fontSizes.sm} }
    a {
      text-decoration: underline;
      color: ${t.colors.blue[500]}
    }
    p, ul, ol, blockquote {
      margin-bottom: 1em;
      font-family: ${t.fonts.body};
    }
    ul, ol {
      margin-left: 1em;
    }
    code {
      font-family: ${t.fonts.mono};
    }
    *:not(pre) > code {
      padding: ${t.space[1]} ${t.space[2]};
      border-radius: 2px;
      background-color: ${t.colors.gray[50]};
      border-color: ${t.colors.gray[100]};
      border-width: 1px;
      font-size: 0.9em;
      display: inline-block;
    }
    pre > code {
      padding: ${t.space[1]} ${t.space[2]};
      border-radius: 2px;
      background-color: ${t.colors.gray[50]};
      border-color: ${t.colors.gray[100]};
      border-width: 1px;
      display: block;
    }
    /* Wordpress Specific */
    .alignright {
      float: right;
      max-width: 50%;
      padding-left: ${t.space[2]};
      padding-bottom: ${t.space[2]};
    }
    .alignleft {
      float: left;
      max-width: 50%;
      padding-right: ${t.space[2]};
      padding-bottom: ${t.space[2]};
    }
  `;

  console.log(children);

  return (
    <Box {...props}>
      <StyledBox>
        <div dangerouslySetInnerHTML={{ __html: children }} />
      </StyledBox>
    </Box>
  );
}
Html.propTypes = {
  children: PropTypes.string,
};
Html.defaultProps = {
  children: '',
};
