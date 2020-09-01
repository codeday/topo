import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import topoTheme from './topoTheme';
import Theme from 'topo/Theme';

addParameters({
  viewMode: 'docs',
  options: {
    theme: topoTheme,
    storySort: (a, b) => {
      if (a[1]?.kind === 'Introduction') {
        return 0;
      } else if (a[1]?.kind === 'Introduction') {
        return 1;
      }

      if (a[1]?.parameters?.storySource?.source === '<Docs />') {
        return 0;
      } else if (a[1]?.parameters?.storySource?.source === '<Docs />') {
        return 1;
      }

      return 0;
    },
  },
});

addDecorator(withA11y);
addDecorator(story => (
  <Theme lang="en" brandColor="red" analyticsId="ZWJBGNNR">
    {story()}
  </Theme>
))
