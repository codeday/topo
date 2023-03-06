import {
  ChakraProvider,
  createCookieStorageManager,
  localStorageManager,
  useColorMode,
  useColorModeValue,
  ColorModeScript,
} from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
// @ts-ignore
import Fathom from "fathom-react";
import PropTypes from "prop-types";
import get from 'lodash.get';
/* eslint-disable no-undef */
import React, { Fragment, createContext, useContext } from "react";
import useSwr from "swr";
import { apiFetch } from "topo/utils";

import Chatra from "./ComponentProviders/Chatra";
import codedayTheme from "./vars";

const customCss = css`
  @font-face{
    font-family:'Sofia Pro';
    src:url('https://f1.codeday.org/topo/fonts/SofiaPro-Bold.woff2') format('woff2'),url('https://f1.codeday.org/topo/fonts/SofiaPro-Bold.woff') format('woff'),url('https://f1.codeday.org/topo/fonts/SofiaPro-Bold.ttf') format('truetype');
    font-weight:700;
    font-style:normal;
    font-display: swap;
  }
  @font-face{
    font-family:'Sofia Pro';
    src: url('https://f1.codeday.org/topo/fonts/SofiaPro-Regular.woff2') format('woff2'),url('https://f1.codeday.org/topo/fonts/SofiaPro-Regular.woff') format('woff'),url('https://f1.codeday.org/topo/fonts/SofiaPro-Regular.ttf') format('truetype');
    font-weight:400;
    font-style:normal;
    font-display: swap;
  }
  @font-face{
    font-family:'Sofia Pro';
    src:url('https://f1.codeday.org/topo/fonts/SofiaPro-Regularitalic.woff2') format('woff2'),url('https://f1.codeday.org/topo/fonts/SofiaPro-Regularitalic.woff') format('woff'),url('https://f1.codeday.org/topo/fonts/SofiaPro-Regularitalic.ttf') format('truetype');
    font-weight:400;
    font-style:italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'Gosha Sans';
    font-weight: 700;
    src: url('https://f1.codeday.org/topo/fonts/GoshaSans-Bold.woff2') format('woff2'),url('https://f1.codeday.org/topo/fonts/GoshaSans-Bold.woff') format('woff'),url('https://f1.codeday.org/topo/fonts/GoshaSans-Bold.ttf') format('truetype');
    font-display: swap;
  }
  @font-face{
    font-family:'Fira Code';
    src:url('https://f1.codeday.org/topo/fonts/firacode-bold-webfont.woff2') format('woff2'),url('https://f1.codeday.org/topo/fonts/firacode-bold-webfont.woff') format('woff');
    font-weight:700;
    font-style:normal;
    font-display: swap;
  }
  @font-face{
    font-family:'Fira Code';
    src:url('https://f1.codeday.org/topo/fonts/firacode-regular-webfont.woff2') format('woff2'), url('https://f1.codeday.org/topo/fonts/firacode-regular-webfont.woff') format('woff');
    font-weight:normal;
    font-style:normal;
    font-display: swap;
  }
`;

const STRINGS = [
  'legal.cookies',
  'legal.ccpa',
  'legal.data.pii',
  'legal.data.payment',
  'eco.link',
  'common.more-info',
  'resources',
  'custom-links',
  'copyright',
  'nonprofit',
  'maintained-by',
  'made-with-love',
];

const query = `query PageQuery ($locale: String!, $stringKeys: [String!]!, $localizationConfig: String!) {
  cms {
    strings (locale: $locale, where: { key_in: $stringKeys } ) {
      items {
        key
        value
      }
    }

    sites(where: { type: "Public", display_contains_all: "Footer" }, locale: $locale) {
      items {
        sys {
          id
        }
        title
        link
      }
    }

    localizationConfig(id: $localizationConfig, locale: $locale) {
      contactDefaultType
      contactDefaultValue
    }
  }
}`;

const QueryContext = createContext({});

export const QueryProvider = QueryContext.Provider;
export function useQuery<T = any>(key?: string, def?: T): T | undefined {
  const obj = useContext(QueryContext);
  if (!key) return (obj as unknown) as T;
  return get(obj, key, def || undefined);
}

interface ProviderProps {
  analyticsId?: string;
  brandColor?: string;
  withChat?: boolean;
  programWebname?: string;
  visibility?: string;
  initialColorMode: string;
  cookies?: any;
  children?: React.ReactNode;
  locale?: string;
  localizationConfig?: string;
}

const Provider = ({
  analyticsId,
  brandColor,
  withChat = false,
  programWebname,
  visibility = "public",
  initialColorMode,
  cookies,
  children,
  locale,
  localizationConfig,
}: ProviderProps) => {
  const FathomComponent = analyticsId ? Fathom : Fragment;

  // Fetch translation strings
  const { data } = useSwr([query, { locale: locale ?? 'en-US', stringKeys: STRINGS, localizationConfig: localizationConfig ?? '2guv6EfbM9qu5y5ER52pVN' }], apiFetch, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  let strings = {};
  if (data?.cms?.strings?.items) {
    strings = data.cms.strings.items.reduce(
      (accum: any, node: any) => ({ ...accum, [node.key]: node.value }),
      {}
    );
  }

  if (brandColor && brandColor in codedayTheme.colors) {
    codedayTheme.colors.brand = codedayTheme.colors[brandColor][600];
  //   codedayTheme.colors.black = codedayTheme.colors.brand[1000];
  //   codedayTheme.colors.modes.light.textLight = (codedayTheme.colors.brand
  //     .desaturated || codedayTheme.colors.brand)[800];
  //   codedayTheme.colors.modes.light.placeholder = (codedayTheme.colors.brand
  //     .desaturated || codedayTheme.colors.brand)[600];
  //   codedayTheme.colors.modes.light.border = (codedayTheme.colors.brand
  //     .desaturated || codedayTheme.colors.brand)[200];
  //   codedayTheme.colors.modes.light.borderColor = (codedayTheme.colors.brand
  //     .desaturated || codedayTheme.colors.brand)[200];
  }
  codedayTheme.config.initialColorMode = initialColorMode
    ? initialColorMode
    : codedayTheme.config.initialColorMode;
  return (
    <>
      <ChakraProvider
        theme={{
          ...codedayTheme,
          colors: codedayTheme.colors,
          programWebname,
          visibility,
          strings,
        }}
        resetCSS
        colorModeManager={
          typeof cookies === "string"
            ? createCookieStorageManager(cookies)
            : localStorageManager
        }
      >
        <Global styles={customCss} />
        <script src="https://www.cognitoforms.com/f/seamless.js" defer />
        {withChat && <Chatra chatraId="5wsfeENwi3WqHrn3n" />}
        <QueryProvider value={data}>
          {analyticsId ? (
            <FathomComponent
              {...(analyticsId && {
                customDomain: "polarbear.codeday.org",
                siteId: analyticsId,
              })}
            >
              {children}
            </FathomComponent>
          ) : children}
        </QueryProvider>
      </ChakraProvider>
    </>
  );
};
Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  analyticsId: PropTypes.string,
  brandColor: PropTypes.string,
  withChat: PropTypes.bool,
  programWebname: PropTypes.string,
  visibility: PropTypes.string,
  initialColorMode: PropTypes.string,
};
Provider.defaultProps = {
  analyticsId: null,
  brandColor: null,
  withChat: false,
  programWebname: "",
  visibility: "Public",
  initialColorMode: null,
};

function getServerSideProps({ req }: any) {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  }
}

export {
  useColorMode,
  useColorModeValue,
  Provider as ThemeProvider,
  type ProviderProps as ThemeProviderProps,
  getServerSideProps,
  ColorModeScript,
  codedayTheme,
};
