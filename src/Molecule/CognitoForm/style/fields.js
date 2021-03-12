import selectors from './selectors';

export default (theme, { colorMode }) => `
  ${selectors.placeholder} {
    color: ${theme.colors.modes[colorMode].placeholder} !important;
    opacity: 1 !important;
  }

  input:focus, ${selectors.fields.yesNo.toggle} .c-toggle:focus-within {
    box-shadow: ${theme.shadows.outline} !important;
  }

  ${selectors.fields.likert} tbody:nth-child(2n), ${selectors.fields.repeatingSection}:nth-child(2n+1) {
    background-color: ${theme.colors.gray[50]} !important;
  }

  ${selectors.fields.likert} tbody th {
    font-size: ${theme.fontSizes.md} !important;
  }

  /* Text */

  ${selectors.input.text}, ${selectors.input.dropdown}, ${selectors.input.textarea} {
    padding: ${theme.space[3]} !important;
    border: 1px solid ${theme.colors.modes[colorMode].border} !important;
    border-radius: ${theme.radii.sm} !important;
    outline: none !important;
    font-weight: 400 !important;
    font-size: ${theme.fontSizes.md} !important;
  }

  ${selectors.input.dropdown} select {
    padding-top: calc(${theme.space[3]} - 0.075rem) !important;
    padding-bottom: calc(${theme.space[3]} - 0.05rem) !important;
    border: none !important;
  }

  ${selectors.input.dropdown} {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  /* Radio and checkboxes */

  ${selectors.fields.choice.radio} label, ${selectors.fields.choice.checkboxes} label,
  ${selectors.fields.yesNo.radio} label, ${selectors.fields.yesNo.checkbox} label {
    font-size: ${theme.fontSizes.md} !important;
  }

  /* Upload */

  ${selectors.fields.upload} > div:first-child {
    padding: ${theme.space[3]} !important;
    border: 1px solid ${theme.colors.modes[colorMode].border} !important;
    border-radius: ${theme.radii.sm} !important;
    outline: none !important;
    font-weight: 400 !important;
    font-size: ${theme.fontSizes.sm} !important;
    background-color: transparent !important;
  }

  /* Toggle */

  ${selectors.fields.yesNo.toggle} .yes, ${selectors.fields.yesNo.toggle} .no {
    display: none !important;
  }

  ${selectors.fields.yesNo.toggle} .c-toggle {
    border-radius: 9999px;
    border: none !important;
    width: 1.875rem !important;
  }

  ${selectors.fields.yesNo.toggle} .switch {
    border-radius: 99999px;
    width: 1.5em;
    height: 1.5em;
    box-shadow: none !important;
    border: none !important;
    background-color: ${theme.colors.white} !important;
    background-image: none;
    margin: 3px !important;
  }

  ${selectors.fields.yesNo.toggleContainer} {
    background-color: ${theme.colors.gray[400]} !important;
    padding: 3px;
    padding-left: 30px;
  }

  :checked + ${selectors.fields.yesNo.toggleContainer} {
    background-color: ${theme.colors.green[500]} !important;
  }

  /* Signature */
  ${selectors.fields.signature} ${selectors.fields.editor} > div {
    border: 1px solid ${theme.colors.modes[colorMode].border} !important;
    border-radius: ${theme.radii.sm} !important;
  }

  ${selectors.icons.signature}::after {
    color: ${theme.colors.modes[colorMode].border} !important;
  }
`;
