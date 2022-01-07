import { DokzProvider, GithubLink, ColorModeSwitch } from "@nexite/dokz";
import React from "react";
import { ThemeProvider, codedayTheme } from "@codeday/topo/Theme";
import { CodeDay } from "@codeday/topo/Atom";

const order = {
  "index.mdx": true,
  Foundations: {
    properties: true,
    colors: true,
    fonts: true,
  },
  Atom: {
    Box: true,
  },
};

export default function App(props) {
  const { Component, pageProps } = props;
  return (
    <ThemeProvider brandColor="red">
      <DokzProvider
        fontFamily={codedayTheme.fonts.body}
        sidebarOrdering={order}
        headerItems={[
          <GithubLink key="0" url="https://github.com/codeday/topo" />,
          <ColorModeSwitch key="1" />,
        ]}
        githubUrl="codeday/topo"
        branch="master"
        headerLogo={<CodeDay fontSize="2xl" withText text="Topo" />}
      >
        <Component {...pageProps} />
      </DokzProvider>
    </ThemeProvider>
  );
}
