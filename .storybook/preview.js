import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import topoTheme from './topoTheme';
import Theme from 'topo/Theme';

addParameters({
  viewMode: 'docs',
  options: {
    theme: topoTheme,
    storySort: (a, b) => 1, // Everything in its initial order, except pages with no stories are at the top.
  },
});

addDecorator(withA11y);
addDecorator(story => (
  <Theme lang="en" brandColor="red" analyticsId="AAAAAA">
    {story()}
  </Theme>
))
