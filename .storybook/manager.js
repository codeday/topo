import { addons } from '@storybook/addons';
import topoTheme from './topoTheme';

addons.setConfig({
  previewTabs: {
    'storybook/docs/panel': 'Docs',
    'storybook/a11y/panel': 'A11y',
    canvas: null,
  },
  showRoots: true,
  theme: topoTheme,
});
