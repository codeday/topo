import { useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React from "react";
import { Box, BoxProps } from "topo/Atom/Box";
import { useTheme } from "topo/utils";

function Html({ children, ...props }: BoxProps) {
  const t = useTheme();
  const bgColor = useColorModeValue(t.colors.gray[50], t.colors.gray[800]);
  const borderColor = useColorModeValue(t.colors.gray[100], t.colors.gray[900]);
  const StyledBox = styled.div`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${t.fonts.header};
      font-weight: bold;
      margin-bottom: 0.75em;
      padding-top: 0.5em;
    }
    h1 {
      font-size: ${t.fontSizes["3xl"]};
    }
    h2 {
      font-size: ${t.fontSizes["2xl"]};
    }
    h3 {
      font-size: ${t.fontSizes.xl};
    }
    h4 {
      font-size: ${t.fontSizes.lg};
    }
    h5 {
      font-size: ${t.fontSizes.md};
    }
    h6 {
      font-size: ${t.fontSizes.sm};
    }
    a {
      text-decoration: underline;
      color: ${t.colors.blue[800]};
    }
    p,
    ul,
    ol,
    blockquote {
      margin-bottom: 1em;
      font-family: ${t.fonts.body};
    }
    ul,
    ol {
      margin-left: 1em;
    }
    code {
      font-family: ${t.fonts.mono};
    }
    *:not(pre) > code {
      padding: ${t.space[1]} ${t.space[2]};
      border-radius: 2px;
      background-color: ${bgColor};
      border-color: ${borderColor};
      border-width: 1px;
      font-size: 0.9em;
      margin-top: -0.2em;
      margin-bottom: -0.2em;
      display: inline-block;
    }
    pre > code {
      padding: ${t.space[1]} ${t.space[2]};
      border-radius: 2px;
      background-color: ${bgColor};
      border-color: ${borderColor};
      border-width: 1px;
      display: block;
    }
    figure {
      margin-bottom: 1em;
      text-align: center;
    }
    figure > * {
      display: inline-block;
    }
    figure > figcaption {
      display: block;
      font-style: italic;
      color: ${t.colors.gray[500]};
      font-size: ${t.fontSizes.sm};
    }
    hr {
      opacity: 0.6;
      border-bottom-color: ${t.colors.gray[200]};
      margin-bottom: ${t.space[16]};
      margin-top: ${t.space[16]};
    }
    blockquote {
      margin-left: ${t.space[4]};
      padding-left: ${t.space[4]};
      border-left: 1px solid ${t.colors.gray[200]};
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

  return (
    <Box {...props}>
      <StyledBox>
        <div dangerouslySetInnerHTML={{ __html: children as string }} />
      </StyledBox>
    </Box>
  );
}
export { Html };
