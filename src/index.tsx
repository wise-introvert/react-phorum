import "@fontsource/montserrat";
import "@fontsource/playfair-display";
import "@fontsource/source-code-pro";
import "@fontsource/inconsolata";
import "@fontsource/fira-code";
import "@fontsource/jetbrains-mono";
import "./fonts/CaslonGraComD.ttf";
import "./fonts/CaslonGraD.ttf";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  ColorModeContextType,
  useColorMode,
  ChakraProvider,
  Box,
  useColorModeValue,
  Container,
  ColorModeScript,
  useTheme,
} from "@chakra-ui/react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./utils";
import { Navbar, Feed } from "./components";

dayjs.extend(updateLocale);
dayjs.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    M: "1 mo",
    MM: "%d mos",
    y: "1 yr",
    yy: "%d yrs",
  },
});
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

// TODO: isloate to it's own component.
const Wrapper = () => {
  const client: ApolloClient<{}> = new ApolloClient<{}>({
    uri:
      process.env.NODE_ENV == "production"
        ? process.env.REACT_APP_PROD_GQL_URI
        : process.env.REACT_APP_GQL_URI ?? "http://localhost:4000",
    cache: new InMemoryCache(),
  });

  return (
    <Box
      w={"full"}
      h="full"
      p={0}
      m={0}
      bg={useColorModeValue(theme.colors.lightergray, theme.colors.black)}
    >
      <Navbar />
      <Box h={"full"} py={4} px={"5vw"}>
        <Outlet />
      </Box>
    </Box>
  );
};

export const App = () => {
  const client: ApolloClient<{}> = new ApolloClient<{}>({
    uri:
      process.env.NODE_ENV == "production"
        ? process.env.REACT_APP_PROD_GQL_URI
        : process.env.REACT_APP_GQL_URI ?? "http://localhost:4000",
    cache: new InMemoryCache(),
  });

  const router = createBrowserRouter([
    {
      element: <Wrapper />,
      children: [
        {
          path: "/",
          element: <Feed />,
        },
      ],
    },
  ]);

  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <ColorModeScript nonce={"hello"} initialColorMode={"dark"} />
        <RouterProvider router={router} />
      </ChakraProvider>
    </ApolloProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
