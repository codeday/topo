import { type WithCSSVar } from "@chakra-ui/styled-system";
import { type Dict } from "@chakra-ui/utils";

/* eslint-disable global-require */
/*export default (...args: any[]) =>
  `@import url(https://f1.srnd.org/topo/fonts/all.css);${[
    require("./buttons"),
    require("./titles"),
    require("./text"),
    require("./fields"),
    require("./layout"),
  ]
    .map((f) => f.default(...args))
    .join(" ")
    .replace(/\n/g, " ")}`;
*/

export interface ThemeProps {
  theme: WithCSSVar<Dict<any>>
  showTitle: boolean
  colorMode: string
  formId: string
}

export default ({ theme, showTitle, colorMode, formId }: any): string => `
  ${!showTitle && `#${formId} .cog-header { display: none !important; } #${formId} .cog-page-progress .el-scrollbar__view { padding-top: 0 !important; }`}
  #${formId} .el-input__inner:focus { border-color: rgb(171, 216, 255); }
  #${formId} input[type="text"],
  #${formId} input[type="email"],
  #${formId} input[type="phone"],
  #${formId} input[type="number"],
  #${formId} input[type="url"],
  #${formId} textarea { background-color: transparent !important; }
  #${formId} .cog-repeating-section__heading { font-size: 0 !important; }
  #${formId} .cog-repeating-section__heading button { font-size: initial !important; }
  #${formId} .cog-repeating-section__section h3 + .cog-row { margin-top: -3em !important; }
  #${formId} .el-switch__core { background-color: ${theme.colors.gray[500]}; }
  #${formId} .el-switch.is-checked .el-switch__core { background-color: ${theme.colors.green[500]}; }
  #${formId} .el-button { font-weight: bold !important; }
  #${formId} .cog-col.is-error::before { opacity: 0; }
  #${formId} .cog-page-progress--steps a::before { border-color: initial; }
  #${formId} .cog-page__navigation { padding-top: 0 !important; padding-bottom: var(--gutter); }
  #${formId} .cog-body { margin-top: 0! important; }

  #${formId} .cog-cognito {
    --form__width: 100%;
    --form__background-color: ${theme.colors.current.bg};
    --background-hsl: ${colorMode === 'dark' ? '0, 0%, 16%' : '0, 0, 100%'};
    --color: ${theme.colors.current.text};
    --header__color: ${theme.colors.current.text};
    --label__color: ${theme.colors.current.text};
    --heading__color: ${theme.colors.current.text};
    --a__color: ${theme.colors.blue[600]};
    --primary: ${theme.colors.blue[600]};
    --highlight: ${theme.colors.blue[600]};
    --highlight-reverse: white;
    --button-secondary__color: white;
    --button-primary__background-color: ${theme.colors.green[600]};
    --button-primary__border-color: ${theme.colors.green[600]};
    --button-secondary__background-color: ${colorMode === 'dark' ? theme.colors.whiteAlpha[300] : theme.colors.gray[200]};
    --button-secondary__color: ${theme.colors.current.text};
    --button-secondary__border-color: ${theme.colors.current.text};
    --input__color: ${theme.colors.current.text};
    --input__background-color: transparent;
    --placeholder__color: ${colorMode === 'dark' ? theme.colors.whiteAlpha[300] : theme.colors.gray[500]};
    --input__border-color: ${colorMode === 'dark' ? theme.colors.whiteAlpha[300] : theme.colors.gray[500]};


    --font-family: ${theme.fonts.body};
    --label__font-family: ${theme.fonts.body};
    --heading__font-family: ${theme.fonts.body};
    --button-primary__font-family: ${theme.fonts.body};
    --button-secondary__font-family: ${theme.fonts.body};

    --font-size: ${theme.fontSizes.sm};
    --small-text: ${theme.fontSizes.xs};
    --label__font-size: ${theme.fontSizes.md};
    --h2__font-size: ${theme.fontSizes.lg};

    --border-radius: ${theme.radii.md};
    --border-width: 1px;
    --input__border-width: 1px;
    --button-primary__border-width: 0;
    --button-secondary__border-width: 0;
    --input__border-radius: ${theme.radii.md};
    --input-focus__box-shadow: rgb(171, 216, 255) 0px 0px 0px 1px;
    --input__border-style: solid;
    --input__border-width-top: 1px;
    --input__border-width-bottom: 1px;
    --input__border-width-left: 1px;
    --input__border-width-right: 1px;

    --negative: ${theme.colors.red[800]};
    --negative-reverse: ${theme.colors.red[50]};

    --gutter: 30px;
    --icon-weight: .3;
    --speed: 2s;
    --button-primary__border-radius: ${theme.radii.md};
    --button-secondary__border-radius: ${theme.radii.md};
    --input__padding-v: 12px;
    --input__padding-h: 15px;
    --toggle__border-radius: 40px;
  }
`
