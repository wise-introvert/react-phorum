import type { Preview } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { MockedProvider } from "@apollo/client/testing";

import { theme } from "../src/utils";

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

const preview: Preview = {
  decorators: [withRouter],
  parameters: {
    apolloClient: {
      MockedProvider,
    },
    chakra: {
      theme,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
