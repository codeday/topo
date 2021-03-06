import React, { Fragment, useEffect } from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import topoTheme, { test } from './topoTheme';
import Theme from 'topo/Theme';
import { useColorMode, codedayTheme } from 'topo/Theme'
import Button from 'topo/Atom/Button'
import Box from 'topo/Atom/Box'

addParameters({
  viewMode: 'docs',
  docs: {
    theme: topoTheme,
  },
  options: {
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
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: true,
  },
});

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
    },
  },
};


const withThemeProvider = (Story, context) => {
  console.log(context)
  // console.log(context.globals.theme)
  return (
    <Theme lang="en" brandColor="red" analyticsId="ZWJBGNNR" initialColorMode={context.globals.theme}>
      <Box bg={context.globals.theme == "dark" ? "gray.1100" : "white"}>
        <Story />
      </Box>
    </Theme >
  )
}
export const decorators = [withThemeProvider];


// addDecorator(story => (
  // <Theme lang="en" brandColor="red" analyticsId="ZWJBGNNR">
//   <Theme>
//     {story()}
//   </Theme>
// ))
