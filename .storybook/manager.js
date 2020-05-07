import { addons } from '@storybook/addons';
import topoTheme from './topoTheme';
import { STORY_MISSING } from "@storybook/core-events";

addons.register("codeday/startup", api => {
  window.a = api;
  api.on(STORY_MISSING, (kind, story) => {
    api.selectStory("introduction--introduction");
  });
});

addons.setConfig({
  previewTabs: {
    'storybook/docs/panel': 'Docs',
    'storybook/a11y/panel': 'A11y',
    canvas: null,
  },
  showRoots: true,
  theme: topoTheme,
});
