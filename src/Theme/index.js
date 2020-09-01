/* eslint-disable no-undef */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import useSwr from 'swr';
import ThemeProvider from '@chakra-ui/core/dist/ThemeProvider';
import CSSReset from '@chakra-ui/core/dist/CSSReset';
import originalTheme from '@chakra-ui/core/dist/theme';
import Fathom from 'fathom-react';
import { apiFetch } from 'topo/utils';
import vars from './vars';
import Chatra from './ComponentProviders/Chatra';
import Toasts from './ComponentProviders/Toasts';

export const codedayTheme = {
  ...originalTheme,
  ...vars,
};

const customCss = css`
  @import url(https://f1.srnd.org/topo/fonts/all.css);
`;

const query = `{
  cms {
    strings {
      items {
        key
        value
      }
    }
  }
}`

function Provider({
  analyticsId, brandColor, withChat, programWebname, visibility, children,
}) {
  const FathomComponent = analyticsId ? Fathom : Fragment;

  // Fetch translation strings
  const { data } = useSwr(
    query,
    apiFetch,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  let strings = {};
  if (data?.cms?.strings?.items) {
    strings = data.cms.strings.items.reduce((accum, node) => ({...accum, [node.key]: node.value}), {});
  }

  if (brandColor in codedayTheme.colors) {
    codedayTheme.colors.brand = codedayTheme.colors[brandColor];
    codedayTheme.colors.black = codedayTheme.colors.brand[1000];
    codedayTheme.colors.modes.light.color = codedayTheme.colors.black;
    codedayTheme.colors.modes.light.text = codedayTheme.colors.black;
    codedayTheme.colors.modes.light.textLight = (codedayTheme.colors.brand.desaturated || codedayTheme.colors.brand)[800];
    codedayTheme.colors.modes.light.placeholder = (codedayTheme.colors.brand.desaturated || codedayTheme.colors.brand)[600];
    codedayTheme.colors.modes.light.border = (codedayTheme.colors.brand.desaturated || codedayTheme.colors.brand)[200];
  }

  return (
    <ThemeProvider
      theme={{
        ...codedayTheme,
        colors: codedayTheme.colors,
        programWebname,
        visibility,
        strings,
      }}
    >
      <CSSReset config={(theme) => theme.colors.modes} />
      <Global styles={customCss} />
      { withChat && <Chatra chatraId="5wsfeENwi3WqHrn3n" /> }
      <FathomComponent {...(analyticsId && {customDomain: "polarbear.codeday.org", siteId: analyticsId })}>
        <Toasts>
          {children}
        </Toasts>
      </FathomComponent>
    </ThemeProvider>
  );
}
Provider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]).isRequired,
  analyticsId: PropTypes.string,
  brandColor: PropTypes.string,
  withChat: PropTypes.bool,
  programWebname: PropTypes.string,
  visibility: PropTypes.string,
};
Provider.defaultProps = {
  analyticsId: null,
  brandColor: null,
  withChat: false,
  programWebname: '',
  visibility: 'Public',
};
export default Provider;
