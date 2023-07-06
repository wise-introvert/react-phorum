import type { Meta, StoryObj } from "@storybook/react";

import { Feed } from ".";
import { GetFeedQuery } from "./graphql";

const meta: Meta<typeof Feed> = {
  title: "Feed",
  component: Feed,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Feed>;

const posts: Interfaces.Post[] = [
  {
    _id: "645c577f3fa6361756338c28",
    title: "Something light with funny bits and fantasy too?",
    content:
      "I've been reading the same books for years. I don't enjoy heavy meaning in books thanks to several college courses on literature analysis so I mostly stick to YA novels. I don't object to violence or X rated activity, but I do prefer fantasy. \n\nBooks I've already read:\n\nThe Eragon series\n\nHarry Potter\n\nPercy Jackson and pretty much everything else Rick Riordan has written for teens.\n\nLOTR\n\nMost of Robin McKinley's stuff\n\nThe Wicked Lovely series by Melissa Marr\n\nFred the Vampire Accountant series\n\nHollow Kingdom series by Clare Dunkle\n\nHunger Games\n\nDivergent\n\nThe Giver\n\nThat's definitely not an exhaustive list of all the books I've ever read but it is what I can think of that fits the description. Appreciate any and all suggestions! Thanks Reddit!",
    createdAt: "1970-01-20T11:42:48.910Z",
    updatedAt: "2023-05-11T02:59:59.446Z",
    genisis: true,
    parentPost: null,
    thread: {
      _id: "645c577f3fa6361756338c34",
      forum: {
        _id: "645c577f3fa6361756338c24",
        title: "r/suggestmeabook",
      },
    },
    author: {
      _id: "645c577f3fa6361756338c21",
      username: "LizzyPBaJ",
      avatar:
        "https://www.gravatar.com/avatar/cc76c1fde254aee840f1443c16097e2f?s=500&d=retro",
    },
    children: [
      {
        _id: "645c57803fa6361756338c5b",
        title: null,
        content:
          '<div class="md"><p>Well have I got a treat for you. Check out Discworld by Terry Pratchett. I&#39;ve read them all several times. Now audible is re-recording them as well.</p>\n</div>',
        createdAt: "1970-01-20T11:42:50.780Z",
        updatedAt: "1970-01-20T11:42:50.780Z",
        genisis: false,
        parentPost: {
          _id: "645c577f3fa6361756338c28",
        },
        author: {
          _id: "645c57803fa6361756338c59",
          username: "elitecloser",
          avatar:
            "https://www.gravatar.com/avatar/cd52492ed1995f02cf9ad8b1906a0017?s=500&d=retro",
        },
      },
      {
        _id: "645c580a3fa63617563487af",
        title: null,
        content:
          '<div class="md"><p><em>All My Friends are Superheroes</em> by Andrew Kaufman is sweet, funny, and thoroughly weird.</p>\n\n<p>The Bartimaeus Trilogy by Jonathan Stroud is spectacular, and features one of the snarkiest narrators you&#39;ll ever read. The first book is <em>The Amulet of Samarkand</em>.</p>\n\n<p><em>Bone</em> by Jeff Smith is fantasy/adventure/comedy and pretty much everyone who reads it loves it.</p>\n</div>',
        createdAt: "1970-01-20T11:42:50.934Z",
        updatedAt: "1970-01-20T11:42:50.934Z",
        genisis: false,
        parentPost: {
          _id: "645c577f3fa6361756338c28",
        },
        author: {
          _id: "645c580a3fa63617563487ad",
          username: "Pope_Cerebus",
          avatar:
            "https://www.gravatar.com/avatar/c77e1096182deaa0b0f4c1aea292efc6?s=500&d=retro",
        },
      },
      {
        _id: "645c58953fa6361756358303",
        title: null,
        content:
          '<div class="md"><p>The Dying Breed: Hunters.</p>\n\n<p>Available on Amazon KU</p>\n</div>',
        createdAt: "1970-01-20T11:42:49.365Z",
        updatedAt: "1970-01-20T11:42:49.365Z",
        genisis: false,
        parentPost: {
          _id: "645c577f3fa6361756338c28",
        },
        author: {
          _id: "645c58953fa6361756358301",
          username: "Skuzzy_G",
          avatar:
            "https://www.gravatar.com/avatar/e20edecf79b8563774421c453367344c?s=500&d=retro",
        },
      },
      {
        _id: "645c59203fa6361756367e57",
        title: null,
        content:
          '<div class="md"><p>Second the Terry Pratchett recommendation. Good starting points include Mort, Guards Guards, Going Postal, Wyrd Sisters, the Wee Free Men, Small Gods.</p>\n\n<p>I also recommend Robert Aspirin Myth Inc series and Phules series,</p>\n\n<p>Spider Robinson Callahans series</p>\n</div>',
        createdAt: "1970-01-20T11:42:50.977Z",
        updatedAt: "1970-01-20T11:42:50.977Z",
        genisis: false,
        parentPost: {
          _id: "645c577f3fa6361756338c28",
        },
        author: {
          _id: "645c59203fa6361756367e55",
          username: "boxer_dogs_dance",
          avatar:
            "https://www.gravatar.com/avatar/61af5ee7aa5e6ee779710080a39e7758?s=500&d=retro",
        },
      },
      {
        _id: "645c59ad3fa63617563779ab",
        title: null,
        content:
          '<div class="md"><p>I would suggest the Myth series by Robert Asprin. Very fun fantasy books.</p>\n</div>',
        createdAt: "1970-01-20T11:42:51.426Z",
        updatedAt: "1970-01-20T11:42:51.426Z",
        genisis: false,
        parentPost: {
          _id: "645c577f3fa6361756338c28",
        },
        author: {
          _id: "645c59ad3fa63617563779a9",
          username: "Grape1921",
          avatar:
            "https://www.gravatar.com/avatar/9cfe03be769d7fec1c1177a557f659b2?s=500&d=retro",
        },
      },
      {
        _id: "645c59dc3fa636175637db33",
        title: null,
        content:
          '<div class="md"><p>Another vote for Discworld. But also check out Off to be the Wizard by Scott Meyer it&#39;s definitely a fun twist on things, and a very light read.</p>\n</div>',
        createdAt: "1970-01-20T11:42:52.263Z",
        updatedAt: "1970-01-20T11:42:52.263Z",
        genisis: false,
        parentPost: {
          _id: "645c577f3fa6361756338c28",
        },
        author: {
          _id: "645c59dc3fa636175637db31",
          username: "WildeTee",
          avatar:
            "https://www.gravatar.com/avatar/d0ac9ea83ed6bfe25b806b67fead2ed6?s=500&d=retro",
        },
      },
      {
        _id: "645c5a0b3fa6361756383cbb",
        title: null,
        content:
          '<div class="md"><p>Check out Darynda Jones and Hailee Edwards</p>\n</div>',
        createdAt: "1970-01-20T11:42:52.678Z",
        updatedAt: "1970-01-20T11:42:52.678Z",
        genisis: false,
        parentPost: {
          _id: "645c577f3fa6361756338c28",
        },
        author: {
          _id: "645c5a0b3fa6361756383cb9",
          username: "NovelGoddess",
          avatar:
            "https://www.gravatar.com/avatar/56cbf34f61ebd7ccdb2650810a482e68?s=500&d=retro",
        },
      },
    ],
  },
  {
    _id: "645c56f23fa636175632909c",
    title: "the house party by Gabriel Picolo",
    content: "",
    createdAt: "1970-01-20T11:42:47.239Z",
    updatedAt: "2023-05-11T02:48:13.396Z",
    genisis: true,
    parentPost: null,
    thread: {
      _id: "645c56f23fa63617563290a8",
      forum: {
        _id: "645c56f23fa6361756329098",
        title: "r/ImaginarySliceOfLife",
      },
    },
    author: {
      _id: "645c56f23fa6361756329095",
      username: "HornyHeracross",
      avatar:
        "https://www.gravatar.com/avatar/0bead7bb91dc6c7c9814de6b58b787a9?s=500&d=retro",
    },
    children: [
      {
        _id: "645c57493fa6361756332a9b",
        title: null,
        content:
          '<div class="md"><p>Teen Titans was one of my favs as a kid. I really enjoy Picolo’s slice of life pieces. </p>\n\n<p><sup>Also</sup> <sup>realizing</sup> <sup>that</sup> <sup>show</sup> <sup>first</sup> <sup>aired</sup> <sup>20</sup> <sup>years</sup> <sup>ago</sup> <sup>holy</sup> <sup>cow.</sup></p>\n</div>',
        createdAt: "1970-01-20T11:42:48.605Z",
        updatedAt: "1970-01-20T11:42:48.605Z",
        genisis: false,
        parentPost: {
          _id: "645c56f23fa636175632909c",
        },
        author: {
          _id: "645c57493fa6361756332a99",
          username: "Cu_fola",
          avatar:
            "https://www.gravatar.com/avatar/b9c023806b63986cce4b1a5de8245218?s=500&d=retro",
        },
      },
    ],
  },
] as any;

export const Default: Story = {
  args: {},
};

Default.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: GetFeedQuery,
        },
        result: {
          data: {
            posts,
          },
        },
      },
    ],
  },
};

/*
export const Loading: Story = {
  args: {
    loading: true,
    ...Default.args,
  },
};

export const Error: Story = {
  args: {
    error: "Something went wrong!",
    ...Default.args,
  },
};

export const NoData: Story = {
  args: {
    ...Default.args,
    post: undefined,
  },
};

export const MissingStats: Story = {
  args: {
    ...Default.args,
    temp: {
      ...(Default.args!.temp as any),
      views: 0,
      votes: 0,
    },
  },
};

export const NoImage: Story = {
  args: {
    ...Default.args,
    temp: {
      ...(Default.args!.temp as any),
      image: undefined,
    },
  },
};

export const IsGenisis: Story = {
  args: {
    ...Default.args,
    post: {
      ...(Default.args!.post as any),
      genisis: true,
    },
  },
};

export const NoContent: Story = {
  args: {
    ...Default.args,
    post: {
      ...(Default.args!.post as any),
      content: "",
    },
  },
};
*/
