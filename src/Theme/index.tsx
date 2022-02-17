import {
  ChakraProvider,
  cookieStorageManager,
  extendTheme,
  localStorageManager,
} from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
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
    src:url('https://f1.codeday.org/topo/fonts/SofiaPro-Bold.woff2') format('woff2'),url('https://f1.codeday.org/topo/fonts/SofiaPro-Bold.woff') format('woff'),url('Shttps://f1.codeday.org/topo/fonts/ofiaPro-Bold.ttf') format('truetype');
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

const query = `{
  cms {
    strings {
      items {
        key
        value
      }
    }
    sites(where: { type: "Public", display_contains_all: "Footer" }) {
      items {
        sys {
          id
        }
        title
        link
      }
    }
  }
}`;

const QueryContext = createContext({});

export const QueryProvider = QueryContext.Provider;
export function useQuery<T = any>(key?: string, def?: T): T | undefined {
  const obj = useContext(QueryContext);
  if (!key) return (obj as unknown) as T;
  return get(obj, key, def || null);
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
}: ProviderProps) => {
  const FathomComponent = analyticsId ? Fathom : Fragment;

  // Fetch translation strings
  const { data } = useSwr(query, apiFetch, {
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
            ? cookieStorageManager(cookies)
            : localStorageManager
        }
      >
        <Global styles={customCss} />
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
// export default Provider;

export {
  useColorMode,
  useColorModeValue,
  Provider as ThemeProvider,
  ProviderProps as ThemeProviderProps,
};
export { codedayTheme };
