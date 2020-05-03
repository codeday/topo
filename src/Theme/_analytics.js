/* eslint-disable no-undef */
import React from 'react';
import Script from 'react-load-script';
import { useTheme } from '@chakra-ui/core/dist/ThemeProvider';

const doFathom = (...args) => {
  if (typeof window === 'undefined') return;
  (window.fathom = window.fathom || ((...argsInner) => {
    (window.fathom.q = window.fathom.q || []).push(argsInner);
  }))(...args);
};

const fathomWrapper = {
  trackPageView: () => doFathom('trackPageView'),
  trackGoal: (goalId, value) => doFathom('trackGoal', goalId, value || 0),
};

export const useAnalytics = () => fathomWrapper;

export default function Analytics() {
  const { analytics } = useTheme();

  return analytics && analytics.siteId && (
    <Script
      url={`${analytics.base}/core.js#cdn.usefathom.com`}
      attributes={{
        site: analytics.siteId,
        spa: 'pushstate',
      }}
    />
  );
}
Analytics.displayName = 'Analytics';
