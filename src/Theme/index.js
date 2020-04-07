/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import ThemeProvider from '@chakra-ui/core/dist/ThemeProvider';
import CSSReset from '@chakra-ui/core/dist/CSSReset';
import originalTheme from '@chakra-ui/core/dist/theme';
import colors from './colors';
import fonts from './fonts';

export const codedayTheme = {
  ...originalTheme,
  colors,
  fonts,
};

const Provider = ({ children }) => (
  <ThemeProvider theme={codedayTheme}>
    <CSSReset config={(theme) => theme.colors.modes} />
    <Global styles={css`@import url(https://f1.srnd.org/topo/fonts/all.css);`} />
    {children}
  </ThemeProvider>
);
Provider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]).isRequired,
};
export default Provider;
