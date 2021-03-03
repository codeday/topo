import { create } from '@storybook/theming/create';

export const test = create({base: "dark"})

export default create({
  base: 'light',

  colorPrimary: '#ff686b',
  colorSecondary: '#ff686b',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#e6dfdf',
  appBorderRadius: 4,

  // Typography
  fontBase: 'Sofia Pro, Helvetica, Arial, sans-serif',
  fontCode: 'Fira Code, Menlo, Inconsolata, mono',

  // Text colors
  textColor: '#252222',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#c1afaf',
  barSelectedColor: '#252222',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#e6dfdf',
  inputTextColor: '#252222',
  inputBorderRadius: 2,

  brandTitle: 'CodeDay Topo',
  brandUrl: 'https://www.codeday.org/',
  brandImage: 'https://f1.srnd.org/topo/stylebook/logo.png',
});

