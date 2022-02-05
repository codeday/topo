import selectors from "./selectors";

export default (theme: any, { colorMode }: any) => `
  ${selectors.background}, ${selectors.input.dropdown}, ${
  selectors.input.text
}, select, .cognito-dropdown-menu {
    background-color: ${theme.colors.current.bg} !important;
    color: ${theme.colors.current.color};
  }

  ${selectors.wrapper} {
    max-width: none !important;
    margin-right: -4px;
    margin-left: -5px;
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

  ${
    colorMode === "dark"
      ? ".c-rating-scale tbody:nth-child(even), .c-repeating-section-group > div:not(.c-table-row):nth-child(2n+1) {background-color: rgba(0,0,0,0.1) !important;} .c-signature-present, .cognito .c-signature .c-editor>div, textarea {background-color: transparent !important;}"
      : ""
  }
`;
