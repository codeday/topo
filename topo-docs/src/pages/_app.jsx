import { DokzProvider, GithubLink, ColorModeSwitch } from "@nexite/dokz";
import React from "react";
import { ThemeProvider, codedayTheme } from "@codeday/topo/Theme";
import { CodeDay, Button, Box } from "@codeday/topo/Atom";
import { useTheme } from "@codeday/topo/utils";
import { Announcement } from "@codeday/topo/Organism";

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
  console.log(codedayTheme.fonts.body);
  return (
    <ThemeProvider brandColor="red">
      <DokzProvider
        fontFamily={codedayTheme.fonts.body}
        sidebarOrdering={order}
        headerItems={[
          <GithubLink key="0" url="https://github.com/codeday/topo" />,
          <ColorModeSwitch key="1" />,
        ]}
        headerLogo={<CodeDay fontSize="2xl" withText text="Topo" />}
      >
          <Component {...pageProps} />
      </DokzProvider>
    </ThemeProvider>
  );
}
