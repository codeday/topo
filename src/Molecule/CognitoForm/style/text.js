import selectors from './selectors';

export default (theme) => `
  html {
    color: ${theme.colors.current.text} !important;
  }

  * {
    font-family: ${theme.fonts.body} !important;
  }

  h2 {
    font-size: ${theme.fontSizes.xl} !important;
  }

  h3 {
    font-size: ${theme.fontSizes.lg} !important;
  }

  h4 {
    font-size: ${theme.fontSizes.md} !important;
  }

  ${selectors.fields.html}${selectors.fields.editor} {
    font-size: ${theme.fontSizes.md} !important;
  }

  ${selectors.confirmation} {
    padding: 0 !important;
    text-align: center !important;
    color: ${theme.colors.gray[600]} !important;
    font-size: ${theme.fontSizes.lg} !important;
  }

  ${selectors.label} {
    color: ${theme.colors.current.text} !important;
    font-size: ${theme.fontSizes.md} !important;
  }

  ${selectors.helpText} {
    color: ${theme.colors.gray[400]} !important;
    font-size: ${theme.fontSizes.sm} !important;
  }

  ${selectors.fields.editor} a {
    color: ${theme.colors.blue[500]} !important;
  }

  ${selectors.pageNumber} {
    color: ${theme.colors.gray[500]} !important;
    margin-right: ${theme.space[2]} !important;
    margin-top: 0 !important;
    padding-top: 0 !important;
  }

  ${selectors.error} {
    color: ${theme.colors.red[900]} !important;
    background-color: ${theme.colors.red[300]} !important;
    font-weight: 700 !important;
    font-size: ${theme.fontSizes.sm};
    border-radius: 0 !important;
  }

  ${selectors.placeholder} {
    color: ${theme.colors.gray[500]} !important;
  }
`;
