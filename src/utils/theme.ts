import {
  extendTheme,
  ThemeConfig,
  withDefaultColorScheme,
} from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

// color palette
const primary: string = '#FFBE0B';
const primaryLight: string = '#ffe461';
const primaryDark: string = '#e0a90b';
const white: string = '#ffffff'; // "#fafbfb",
const black: string = '#010001';
const darkgray: string = '#171717';
const lightgray: string = '#667581';
const lightergray: string = '#EBEBEB';

// fonts
const font: string = 'Fira Code';
const brandFont: string = 'CaslonGraD';

export const theme = extendTheme(
  {
    fonts: {
      brand: brandFont,
      heading: font,
      body: font,
      mono: font,
    },
    colors: {
      brand: '#FFBE0B',
      yellow: {
        100: '#fff7d0',
        200: '#ffe999',
        300: '#ffdd61',
        400: '#ffcf2a',
        500: '#ffbe0b', // Base color
        600: '#e0a90b',
        700: '#c0970a',
        800: '#a08309',
        900: '#825f08',
      },
      primary,
      primaryLight,
      primaryDark,
      white, // "#fafbfb",
      black,
      darkgray,
      lightgray,
      lightergray,
    },
    config,
  },
  withDefaultColorScheme({ colorScheme: 'yellow' })
);
