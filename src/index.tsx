import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container, Text, Box } from "@chakra-ui/react";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./utils";

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

const client: ApolloClient<{}> = new ApolloClient<{}>({
  uri: process.env.REACT_APP_GQL_URI || "http://localhost:4000",
  cache: new InMemoryCache(),
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello</h1>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
