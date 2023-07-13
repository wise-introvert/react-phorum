import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  fonts: {
    heading: "Source Code Pro",
    body: "Source Code Pro",
    mono: "Source Code Pro",
  },
  colors: {
    primary: "#FFBE0B",
    white: "#fafbfb",
    black: "#010001",
    darkgray: "#171717",
    lightgray: "#667581",
  },
  config,
});
