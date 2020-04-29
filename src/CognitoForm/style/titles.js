import selectors from './selectors';

export default (theme, { showTitle }) => `
  ${selectors.title} {
    font-family: ${theme.fonts.heading} !important;
  }

  ${selectors.titleSection} {
    display: ${showTitle ? 'block' : 'none'} !important;
    padding: 0 0 ${theme.space[2]} !important;
  }

  ${selectors.fields.repeatingSection} h4 {
    display: none !important;
  }

  ${selectors.fields.repeatingSectionItem}-title {
    margin-bottom: -2.05em !important;
  }
`;
