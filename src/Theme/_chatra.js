/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import Script from 'react-load-script';
import { useTheme } from '../utils';

export default () => {
  const { colors, chatra } = useTheme();

  useEffect(() => {
    if (typeof (window) === 'undefined') return;
    window.ChatraID = chatra.id;
    window.ChatraSetup = {
      colors: {
        buttonText: colors.gray[400],
        buttonBg: colors.white,
      },
    };
  }, [typeof window, colors]);

  return <Script url="https://www.srnd.org/chatra.js" />;
};
