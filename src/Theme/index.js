/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import ThemeProvider from '@chakra-ui/core/dist/ThemeProvider';
import CSSReset from '@chakra-ui/core/dist/CSSReset';
import originalTheme from '@chakra-ui/core/dist/theme';
import Fathom from 'fathom-react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import vars from './vars';
import Chatra from './ComponentProviders/Chatra';

// eslint-disable-next-line no-secrets/no-secrets
const stripePromise = loadStripe('pk_v0AIOIy377403GN0FKltGR9gOAAUe');

export const codedayTheme = {
  ...originalTheme,
  ...vars,
};

const customCss = css`
  @import url(https://f1.srnd.org/topo/fonts/all.css);
`;

const Provider = ({
  analyticsId, brandColor, withChat, children,
}) => (
  <ThemeProvider
    theme={{
      ...codedayTheme,
      colors: { ...codedayTheme.colors, brand: codedayTheme.colors[brandColor] || colors.brand },
    }}
  >
    <CSSReset config={(theme) => theme.colors.modes} />
    <Global styles={customCss} />
    { withChat && <Chatra chatraId="5wsfeENwi3WqHrn3n" /> }
    <Fathom customDomain="polarbear.codeday.org" siteId={analyticsId}>
      <Elements stripe={stripePromise}>
        {children}
      </Elements>
    </Fathom>
  </ThemeProvider>
);
Provider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]).isRequired,
  analyticsId: PropTypes.string,
  brandColor: PropTypes.string,
  withChat: PropTypes.bool,
};
Provider.defaultProps = {
  analyticsId: null,
  brandColor: null,
  withChat: false,
};
export default Provider;
