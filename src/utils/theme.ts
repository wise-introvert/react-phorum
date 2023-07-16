import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const font: string = 'Fira Code';
const brand: string = 'CaslonGraD';

export const theme = extendTheme({
  fonts: {
    brand,
    heading: font,
    body: font,
    mono: font,
  },
  colors: {
    primary: '#FFBE0B',
    white: '#ffffff', // "#fafbfb",
    black: '#010001',
    darkgray: '#171717',
    lightgray: '#667581',
    lightergray: '#EBEBEB',
  },
  config,
});
