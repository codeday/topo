import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import Theme from '../src/Theme';

addParameters({
  viewMode: 'docs',
});


addDecorator(story => (
  <Theme lang="en" brandColor="red">
    {story()}
  </Theme>
))
