import '@fontsource/montserrat';
import '@fontsource/playfair-display';
import '@fontsource/source-code-pro';
import '@fontsource/inconsolata';
import '@fontsource/fira-code';
import '@fontsource/jetbrains-mono';
import './fonts/CaslonGraComD.ttf';
import './fonts/CaslonGraD.ttf';

import ReactDOM from 'react-dom/client';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ChakraProvider,
  Box,
  ColorModeScript,
  useDisclosure,
  useTheme,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
import { theme } from './utils';
import { Navbar, Feed, Button } from './components';

dayjs.extend(updateLocale);
dayjs.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: '1 mo',
    MM: '%d mos',
    y: '1 yr',
    yy: '%d yrs',
  },
});
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

const client: ApolloClient<unknown> = new ApolloClient<unknown>({
  uri:
    process.env.NODE_ENV == 'production'
      ? process.env.REACT_APP_PROD_GQL_URI
      : process.env.REACT_APP_GQL_URI ?? 'http://localhost:4000',
  cache: new InMemoryCache(),
});

// TODO: isloate to it's own component.
const Wrapper = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const theme: Interfaces.Theme = useTheme<Interfaces.Theme>();

  return (
    <Box
      w={'full'}
      h="full"
      p={0}
      m={0}
      bg={useColorModeValue(theme.colors.lightergray, theme.colors.black)}
    >
      <Navbar />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          color={useColorModeValue(theme.colors.black, theme.colors.white)}
          bg={useColorModeValue(theme.colors.white, theme.colors.darkgray)}
        >
          <ModalHeader>
            Website under construction: testing in progress...
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Welcome to our work-in-progress website! Please note that the
              content you see here is for testing purposes only. We are
              currently in the process of constructing our website to provide
              you with the best user experience. Stay tuned for our official
              launch, where you'll find exciting features and valuable
              information. Thank you for your patience and understanding during
              this development phase!
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              I understand
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box h={'full'} py={4} px={'5vw'}>
        <Outlet />
      </Box>
    </Box>
  );
};

export const App = () => {
  const router = createBrowserRouter([
    {
      element: <Wrapper />,
      children: [
        {
          path: '/',
          element: <Feed />,
        },
      ],
    },
  ]);

  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <ColorModeScript nonce={'hello'} initialColorMode={'dark'} />
        <RouterProvider router={router} />
      </ChakraProvider>
    </ApolloProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
