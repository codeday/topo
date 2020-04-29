import selectors from './selectors';

export default (theme) => `
  ${selectors.wrapper} {
    max-width: none !important;
  }

  ${selectors.confirmationPage} {
    min-height: 0 !important;
  }

  ${selectors.section} {
    margin-top: ${theme.space[8]} !important;
  }

  ${selectors.field} {
    padding-bottom: ${theme.space[6]} !important;
  }

  ${selectors.pages.section} {
    padding: 0 0 ${theme.space[6]} 0.5em !important;
  }
`;
