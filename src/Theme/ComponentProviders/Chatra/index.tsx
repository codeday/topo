/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import Script from 'react-load-script';
import { useTheme } from 'topo/utils';

declare const window: any;

interface ChatraProps {
  chatraId: string
}

export default function Chatra({ chatraId }: ChatraProps) {
  const { colors } = useTheme();

  useEffect(() => {
    if (typeof (window) === 'undefined') return;
    window.ChatraID = chatraId;
    window.ChatraSetup = {
      colors: {
        buttonText: colors.gray[400],
        buttonBg: colors.white,
      },
    };
  }, [typeof window, colors]);

  if (!chatraId) return <></>;

  return <Script url="https://call.chatra.io/chatra.js" />;
}
Chatra.displayName = 'Chatra';
