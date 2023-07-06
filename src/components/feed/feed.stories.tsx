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
  {
    _id: "645c53813fa63617562c0745",
    title: "Is this a pigeon?",
    content: "",
    createdAt: "1970-01-20T11:42:10.804Z",
    updatedAt: "2023-05-11T02:45:40.430Z",
    genisis: true,
    parentPost: null,
    thread: {
      _id: "645c53813fa63617562c0751",
      forum: {
        _id: "645c53813fa63617562c0741",
        title: "r/HighQualityGifs",
      },
    },
    author: {
      _id: "645c53803fa63617562c073e",
      username: "QuicklyThisWay",
      avatar:
        "https://www.gravatar.com/avatar/ef7cbf014ceb7bd14835ad8946cedc24?s=500&d=retro",
    },
    children: [
      {
        _id: "645c53d63fa63617562ca144",
        title: null,
        content:
          '<div class="md"><p><a href="https://www.reddit.com/r/BirdsArentReal/">r/BirdsArentReal</a></p>\n</div>',
        createdAt: "1970-01-20T11:42:12.027Z",
        updatedAt: "1970-01-20T11:42:12.027Z",
        genisis: false,
        parentPost: {
          _id: "645c53813fa63617562c0745",
        },
        author: {
          _id: "645c53d63fa63617562ca142",
          username: "Estrada_or_Nada",
          avatar:
            "https://www.gravatar.com/avatar/81f3a83a571aeb3573f5b13e36482e29?s=500&d=retro",
        },
      },
      {
        _id: "645c54043fa63617562d02cc",
        title: null,
        content: '<div class="md"><p>We are being watched</p>\n</div>',
        createdAt: "1970-01-20T11:42:16.772Z",
        updatedAt: "2023-05-11T02:35:03.436Z",
        genisis: false,
        parentPost: {
          _id: "645c53813fa63617562c0745",
        },
        author: {
          _id: "645c54043fa63617562d02ca",
          username: "CraZyBob",
          avatar:
            "https://www.gravatar.com/avatar/6290fb967fda3e6dec844bdc2aeb230c?s=500&d=retro",
        },
      },
      {
        _id: "645c54623fa63617562dc5e1",
        title: null,
        content: '<div class="md"><p>lol so good</p>\n</div>',
        createdAt: "1970-01-20T11:42:24.756Z",
        updatedAt: "1970-01-20T11:42:24.756Z",
        genisis: false,
        parentPost: {
          _id: "645c53813fa63617562c0745",
        },
        author: {
          _id: "645c54623fa63617562dc5df",
          username: "MilleniumFlounder",
          avatar:
            "https://www.gravatar.com/avatar/7d269fc0ff6c6e5eef3efe3c14391c6c?s=500&d=retro",
        },
      },
      {
        _id: "645c54903fa63617562e2769",
        title: null,
        content:
          '<div class="md"><p>I am unfamiliar with this meme but a friend of mine thinks this is some kind of right wing dog whistle. Any accuracy to that claim?</p>\n</div>',
        createdAt: "1970-01-20T11:42:33.927Z",
        updatedAt: "2023-05-11T02:42:32.471Z",
        genisis: false,
        parentPost: {
          _id: "645c53813fa63617562c0745",
        },
        author: {
          _id: "645c54903fa63617562e2767",
          username: "IWantToBeAProducer",
          avatar:
            "https://www.gravatar.com/avatar/44a7e634cf873d59927fa987fbe7b035?s=500&d=retro",
        },
      },
      {
        _id: "645c56233fa6361756310a77",
        title: null,
        content: '<div class="md"><p>Is Ramses</p>\n</div>',
        createdAt: "1970-01-20T11:42:12.922Z",
        updatedAt: "1970-01-20T11:42:12.922Z",
        genisis: false,
        parentPost: {
          _id: "645c53813fa63617562c0745",
        },
        author: {
          _id: "645c56233fa6361756310a75",
          username: "shouldbebabysitting",
          avatar:
            "https://www.gravatar.com/avatar/7ae884894981452ca4b530ea34b8a4df?s=500&d=retro",
        },
      },
      {
        _id: "645c56513fa6361756316bff",
        title: null,
        content:
          '<div class="md"><p>They say you shouldn&#39;t cross the memes, but...</p>\n</div>',
        createdAt: "1970-01-20T11:42:39.174Z",
        updatedAt: "1970-01-20T11:42:39.174Z",
        genisis: false,
        parentPost: {
          _id: "645c53813fa63617562c0745",
        },
        author: {
          _id: "645c56513fa6361756316bfd",
          username: "Breakfast_on_Jupiter",
          avatar:
            "https://www.gravatar.com/avatar/4829e1ac7cd078fdc45a40b4d9f4655c?s=500&d=retro",
        },
      },
      {
        _id: "645c56813fa636175631cd87",
        title: null,
        content: '<div class="md"><p>Is it?</p>\n</div>',
        createdAt: "1970-01-20T11:42:38.649Z",
        updatedAt: "1970-01-20T11:42:38.649Z",
        genisis: false,
        parentPost: {
          _id: "645c53813fa63617562c0745",
        },
        author: {
          _id: "645c56813fa636175631cd85",
          username: "Skullz64",
          avatar:
            "https://www.gravatar.com/avatar/bae989421e5be88935a58a47af92335e?s=500&d=retro",
        },
      },
      {
        _id: "645c56b03fa6361756322f0f",
        title: null,
        content:
          '<div class="md"><p>Remember when the original was a meme people actually laughed at?</p>\n</div>',
        createdAt: "1970-01-20T11:42:50.385Z",
        updatedAt: "1970-01-20T11:42:50.385Z",
        genisis: false,
        parentPost: {
          _id: "645c53813fa63617562c0745",
        },
        author: {
          _id: "645c56b03fa6361756322f0d",
          username: "igotdeletedbyadmins_",
          avatar:
            "https://www.gravatar.com/avatar/358752b3e8af963366fd50050952418e?s=500&d=retro",
        },
      },
    ],
  },
  {
    _id: "645c54903fa63617562e2769",
    title: null,
    content:
      '<div class="md"><p>I am unfamiliar with this meme but a friend of mine thinks this is some kind of right wing dog whistle. Any accuracy to that claim?</p>\n</div>',
    createdAt: "1970-01-20T11:42:33.927Z",
    updatedAt: "2023-05-11T02:42:32.471Z",
    genisis: false,
    parentPost: {
      _id: "645c53813fa63617562c0745",
      title: "Is this a pigeon?",
      content: "",
    },
    thread: {
      _id: "645c53813fa63617562c0751",
      forum: {
        _id: "645c53813fa63617562c0741",
        title: "r/HighQualityGifs",
      },
    },
    author: {
      _id: "645c54903fa63617562e2767",
      username: "IWantToBeAProducer",
      avatar:
        "https://www.gravatar.com/avatar/44a7e634cf873d59927fa987fbe7b035?s=500&d=retro",
    },
    children: [
      {
        _id: "645c54bf3fa63617562e88f1",
        title: null,
        content:
          '<div class="md"><p><a href="https://i.postimg.cc/rpwXP5jt/Mematic-20230510-172859.jpg">https://i.postimg.cc/rpwXP5jt/Mematic-20230510-172859.jpg</a></p>\n</div>',
        createdAt: "1970-01-20T11:42:34.262Z",
        updatedAt: "2023-05-11T02:40:13.760Z",
        genisis: false,
        parentPost: {
          _id: "645c54903fa63617562e2769",
        },
        author: {
          _id: "645c54bf3fa63617562e88ef",
          username: "N3rdr4g3",
          avatar:
            "https://www.gravatar.com/avatar/c3011f4ace26ba168845d944c8486e04?s=500&d=retro",
        },
      },
      {
        _id: "645c55f43fa636175630a8ea",
        title: null,
        content:
          '<div class="md"><p><a href="/r/BirdsArentReal">/r/BirdsArentReal</a> is just a fun thing. Crazies might adopt it, but that just shows them as more crazy.</p>\n</div>',
        createdAt: "1970-01-20T11:42:38.116Z",
        updatedAt: "1970-01-20T11:42:38.116Z",
        genisis: false,
        parentPost: {
          _id: "645c54903fa63617562e2769",
        },
        author: {
          _id: "645c55f43fa636175630a8e8",
          username: "s4b3r6",
          avatar:
            "https://www.gravatar.com/avatar/e5456ee729b6544bbf0d14a1e0749077?s=500&d=retro",
        },
      },
    ],
  },
  {
    _id: "645c54bf3fa63617562e88f1",
    title: null,
    content:
      '<div class="md"><p><a href="https://i.postimg.cc/rpwXP5jt/Mematic-20230510-172859.jpg">https://i.postimg.cc/rpwXP5jt/Mematic-20230510-172859.jpg</a></p>\n</div>',
    createdAt: "1970-01-20T11:42:34.262Z",
    updatedAt: "2023-05-11T02:40:13.760Z",
    genisis: false,
    parentPost: {
      _id: "645c54903fa63617562e2769",
      title: null,
      content:
        '<div class="md"><p>I am unfamiliar with this meme but a friend of mine thinks this is some kind of right wing dog whistle. Any accuracy to that claim?</p>\n</div>',
    },
    thread: {
      _id: "645c53813fa63617562c0751",
      forum: {
        _id: "645c53813fa63617562c0741",
        title: "r/HighQualityGifs",
      },
    },
    author: {
      _id: "645c54bf3fa63617562e88ef",
      username: "N3rdr4g3",
      avatar:
        "https://www.gravatar.com/avatar/c3011f4ace26ba168845d944c8486e04?s=500&d=retro",
    },
    children: [
      {
        _id: "645c55693fa63617562fad87",
        title: null,
        content: '<div class="md"><p>Holy shit.</p>\n</div>',
        createdAt: "1970-01-20T11:42:42.566Z",
        updatedAt: "1970-01-20T11:42:42.566Z",
        genisis: false,
        parentPost: {
          _id: "645c54bf3fa63617562e88f1",
        },
        author: {
          _id: "645c55693fa63617562fad85",
          username: "goosechaser",
          avatar:
            "https://www.gravatar.com/avatar/7e7daac9a3edb7b5bd2aa7f34cc6c191?s=500&d=retro",
        },
      },
    ],
  },
  {
    _id: "645c54043fa63617562d02cc",
    title: null,
    content: '<div class="md"><p>We are being watched</p>\n</div>',
    createdAt: "1970-01-20T11:42:16.772Z",
    updatedAt: "2023-05-11T02:35:03.436Z",
    genisis: false,
    parentPost: {
      _id: "645c53813fa63617562c0745",
      title: "Is this a pigeon?",
      content: "",
    },
    thread: {
      _id: "645c53813fa63617562c0751",
      forum: {
        _id: "645c53813fa63617562c0741",
        title: "r/HighQualityGifs",
      },
    },
    author: {
      _id: "645c54043fa63617562d02ca",
      username: "CraZyBob",
      avatar:
        "https://www.gravatar.com/avatar/6290fb967fda3e6dec844bdc2aeb230c?s=500&d=retro",
    },
    children: [
      {
        _id: "645c54333fa63617562d6454",
        title: null,
        content:
          '<div class="md"><pre><code>&gt;  preposterous\n</code></pre>\n</div>',
        createdAt: "1970-01-20T11:42:42.295Z",
        updatedAt: "1970-01-20T11:42:42.295Z",
        genisis: false,
        parentPost: {
          _id: "645c54043fa63617562d02cc",
        },
        author: {
          _id: "645c54333fa63617562d6452",
          username: "NSA_Chatbot",
          avatar:
            "https://www.gravatar.com/avatar/b4956023ccbe377004d590cf70ed5af8?s=500&d=retro",
        },
      },
    ],
  },
  {
    _id: "645c469e3fa636175613eba2",
    title: "Le nouveau passeport Canadien est pas mal gros...",
    content: "",
    createdAt: "1970-01-20T11:42:13.249Z",
    updatedAt: "2023-05-11T02:31:11.046Z",
    genisis: true,
    parentPost: null,
    thread: {
      _id: "645c469e3fa636175613ebae",
      forum: {
        _id: "645c469e3fa636175613eb9e",
        title: "r/Quebec",
      },
    },
    author: {
      _id: "645c469e3fa636175613eb9b",
      username: "Yan2295",
      avatar:
        "https://www.gravatar.com/avatar/86bc86d0687d1e2897b31dfd915e8850?s=500&d=retro",
    },
    children: [
      {
        _id: "645c469f3fa636175613ebd5",
        title: null,
        content:
          '<div class="md"><p>Ça va être plus difficile de le perdre. Par contre, est-ce ça va être autorisé comme bagage à main?</p>\n</div>',
        createdAt: "1970-01-20T11:42:13.840Z",
        updatedAt: "2023-05-11T01:40:06.142Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c469f3fa636175613ebd3",
          username: "Cervino_1",
          avatar:
            "https://www.gravatar.com/avatar/3937f59b2792915aa743fa141b8f568c?s=500&d=retro",
        },
      },
      {
        _id: "645c47ea3fa6361756160be4",
        title: null,
        content:
          '<div class="md"><p>C&#39;est pour quand AirCanada annule ton vol tu peux t&#39;en servir comme une tente.</p>\n</div>',
        createdAt: "1970-01-20T11:42:15.899Z",
        updatedAt: "1970-01-20T11:42:15.899Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c47ea3fa6361756160be2",
          username: "ketchuppeanut",
          avatar:
            "https://www.gravatar.com/avatar/ee373651734b3b4b20b2b4c4b61a1f2a?s=500&d=retro",
        },
      },
      {
        _id: "645c481d3fa6361756166d6c",
        title: null,
        content:
          '<div class="md"><p>&quot;Mes Blues passent pu dans porte&quot;, mon passeport non plus...</p>\n</div>',
        createdAt: "1970-01-20T11:42:23.207Z",
        updatedAt: "1970-01-20T11:42:23.207Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c481d3fa6361756166d6a",
          username: "McPossibility",
          avatar:
            "https://www.gravatar.com/avatar/b347c4c3739839deea0844807de0e958?s=500&d=retro",
        },
      },
      {
        _id: "645c484c3fa636175616cef4",
        title: null,
        content:
          '<div class="md"><p>Ça explique pourquoi ya tous ces délais de demandes.</p>\n</div>',
        createdAt: "1970-01-20T11:42:13.348Z",
        updatedAt: "2023-05-11T01:45:04.742Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c484c3fa636175616cef2",
          username: "Fred_Buck",
          avatar:
            "https://www.gravatar.com/avatar/ba2c127ef3d6265df2958f96693bae07?s=500&d=retro",
        },
      },
      {
        _id: "645c48fe3fa6361756181ce7",
        title: null,
        content:
          '<div class="md"><p>Les nouvelles données biométriques : Photo taille réelle qui se déplie comme un centrefold.</p>\n</div>',
        createdAt: "1970-01-20T11:42:28.345Z",
        updatedAt: "1970-01-20T11:42:28.345Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c48fe3fa6361756181ce5",
          username: "Icommentor",
          avatar:
            "https://www.gravatar.com/avatar/c088147572041cba990faa647354a62d?s=500&d=retro",
        },
      },
      {
        _id: "645c49313fa6361756187e6f",
        title: null,
        content: '<div class="md"><p>Pas aussi gros que ta maman.</p>\n</div>',
        createdAt: "1970-01-20T11:42:13.300Z",
        updatedAt: "2023-05-11T01:49:03.632Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c49313fa6361756187e6d",
          username: "Bestialman",
          avatar:
            "https://www.gravatar.com/avatar/d0d2299f5118a6c912f638e9290b9bcb?s=500&d=retro",
        },
      },
      {
        _id: "645c4b0d3fa63617561b52b7",
        title: null,
        content:
          '<div class="md"><p>What is this? A passport for whales?</p>\n</div>',
        createdAt: "1970-01-20T11:42:28.823Z",
        updatedAt: "1970-01-20T11:42:28.823Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c4b0d3fa63617561b52b5",
          username: "sletel",
          avatar:
            "https://www.gravatar.com/avatar/7c1ebe3349f7ddb4f9219d3cb57c4704?s=500&d=retro",
        },
      },
      {
        _id: "645c4b3f3fa63617561bb43f",
        title: null,
        content:
          '<div class="md"><p>Chérie j&#39;ai rétréci les enfants 2</p>\n</div>',
        createdAt: "1970-01-20T11:42:28.213Z",
        updatedAt: "1970-01-20T11:42:28.213Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c4b3f3fa63617561bb43d",
          username: "pikolosaxo",
          avatar:
            "https://www.gravatar.com/avatar/e389fb9ff7c1d99180b927d730a6970e?s=500&d=retro",
        },
      },
      {
        _id: "645c4b733fa63617561c15c7",
        title: null,
        content:
          '<div class="md"><p>Un bouclier contre-terroriste sur l’avion.</p>\n</div>',
        createdAt: "1970-01-20T11:42:14.135Z",
        updatedAt: "1970-01-20T11:42:14.135Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c4b733fa63617561c15c5",
          username: "slavabien",
          avatar:
            "https://www.gravatar.com/avatar/367fb8a7c7194fa1569a367b051703e2?s=500&d=retro",
        },
      },
      {
        _id: "645c4ba93fa63617561c774f",
        title: null,
        content:
          '<div class="md"><p>Avec ça, tu peux te faire un avion en papier pis voler de tes propres ailes.</p>\n</div>',
        createdAt: "1970-01-20T11:42:31.096Z",
        updatedAt: "1970-01-20T11:42:31.096Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c4ba93fa63617561c774d",
          username: "-Helvet-",
          avatar:
            "https://www.gravatar.com/avatar/79d7391ee09329769f606d14651e112b?s=500&d=retro",
        },
      },
      {
        _id: "645c4be03fa63617561cd8d7",
        title: null,
        content:
          '<div class="md"><p>Fuck l&#39;alliance entre le gouvernement et le cartel du Big sac à mains pour nous pomper encore plus de cash !</p>\n</div>',
        createdAt: "1970-01-20T11:42:14.943Z",
        updatedAt: "1970-01-20T11:42:14.943Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c4be03fa63617561cd8d5",
          username: "Electronic-War5582",
          avatar:
            "https://www.gravatar.com/avatar/8265c577429bcacb181e1e87b384f8bd?s=500&d=retro",
        },
      },
      {
        _id: "645c4c173fa63617561d3a5f",
        title: null,
        content:
          '<div class="md"><p>Pas besoin de photo en plus, il ont fait un cutout pour y mettre sa face.</p>\n</div>',
        createdAt: "1970-01-20T11:42:28.552Z",
        updatedAt: "1970-01-20T11:42:28.552Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c4c173fa63617561d3a5d",
          username: "liguinii",
          avatar:
            "https://www.gravatar.com/avatar/f6e187d565ec6823841bc887827aa981?s=500&d=retro",
        },
      },
      {
        _id: "645c4c493fa63617561d9be7",
        title: null,
        content:
          '<div class="md"><p>Merci pour le bon rire! Hahaha</p>\n</div>',
        createdAt: "1970-01-20T11:42:29.499Z",
        updatedAt: "1970-01-20T11:42:29.499Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c4c493fa63617561d9be5",
          username: "bobthebobbober",
          avatar:
            "https://www.gravatar.com/avatar/35edff60eb1398f04f4f9be488c79cb7?s=500&d=retro",
        },
      },
      {
        _id: "645c4c793fa63617561dfd6f",
        title: null,
        content:
          '<div class="md"><p>*Éclat de rire * </p>\n\n<p>Merci.</p>\n</div>',
        createdAt: "1970-01-20T11:42:31.380Z",
        updatedAt: "1970-01-20T11:42:31.380Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c4c793fa63617561dfd6d",
          username: "littlemissbagel",
          avatar:
            "https://www.gravatar.com/avatar/062f783664cc1e9859a9a90d027b2915?s=500&d=retro",
        },
      },
      {
        _id: "645c4ca83fa63617561e5ef7",
        title: null,
        content: '<div class="md"><p>criss que cest laid</p>\n</div>',
        createdAt: "1970-01-20T11:42:20.688Z",
        updatedAt: "1970-01-20T11:42:20.688Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c4ca83fa63617561e5ef5",
          username: "kikodemayo",
          avatar:
            "https://www.gravatar.com/avatar/381ffe73a9da65d51325501d99a95178?s=500&d=retro",
        },
      },
      {
        _id: "645c4cd73fa63617561ec07f",
        title: null,
        content:
          '<div class="md"><p>Vu la taille on peut commencer à faire nos demandes de renouvellement!</p>\n</div>',
        createdAt: "1970-01-20T11:42:14.705Z",
        updatedAt: "1970-01-20T11:42:14.705Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c4cd73fa63617561ec07d",
          username: "khelsan_",
          avatar:
            "https://www.gravatar.com/avatar/36296605a948749003f0537f08060f6f?s=500&d=retro",
        },
      },
      {
        _id: "645c4d063fa63617561f2207",
        title: null,
        content:
          '<div class="md"><p>Pourquoi on change toujours pour le pire?</p>\n</div>',
        createdAt: "1970-01-20T11:42:19.223Z",
        updatedAt: "1970-01-20T11:42:19.223Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c4d063fa63617561f2205",
          username: "pierrrecherrry",
          avatar:
            "https://www.gravatar.com/avatar/d51f3463664e186c2739a0504c137949?s=500&d=retro",
        },
      },
      {
        _id: "645c4d363fa63617561f838f",
        title: null,
        content:
          '<div class="md"><p>Heille mauvaise langue, il n’est pas gros, il est juste en bonne santé!</p>\n</div>',
        createdAt: "1970-01-20T11:42:15.600Z",
        updatedAt: "1970-01-20T11:42:15.600Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c4d363fa63617561f838d",
          username: "Neolithique",
          avatar:
            "https://www.gravatar.com/avatar/8ea1dd33ba280b9af41a12ddabcbfd7e?s=500&d=retro",
        },
      },
      {
        _id: "645c4d653fa63617561fe517",
        title: null,
        content: '<div class="md"><p>affreux</p>\n</div>',
        createdAt: "1970-01-20T11:42:15.592Z",
        updatedAt: "1970-01-20T11:42:15.592Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c4d653fa63617561fe515",
          username: "Final-Election4569",
          avatar:
            "https://www.gravatar.com/avatar/31feafe47786ea510b5b6cbe5241d6ee?s=500&d=retro",
        },
      },
      {
        _id: "645c4d953fa636175620469f",
        title: null,
        content:
          '<div class="md"><p>Est plus difficile à falsifier</p>\n</div>',
        createdAt: "1970-01-20T11:42:21.289Z",
        updatedAt: "1970-01-20T11:42:21.289Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c4d953fa636175620469d",
          username: "x-mot",
          avatar:
            "https://www.gravatar.com/avatar/6987bd1425d4c443fedac747a3432b2b?s=500&d=retro",
        },
      },
      {
        _id: "645c4dc53fa636175620a827",
        title: null,
        content: '<div class="md"><p>Ridicule, c&#39;est trop gros</p>\n</div>',
        createdAt: "1970-01-20T11:42:21.643Z",
        updatedAt: "1970-01-20T11:42:21.643Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c4dc53fa636175620a825",
          username: "Iron-Pat",
          avatar:
            "https://www.gravatar.com/avatar/661222ea5712cfb4b1f1750ead9a0a84?s=500&d=retro",
        },
      },
      {
        _id: "645c4df43fa63617562109af",
        title: null,
        content:
          '<div class="md"><p>Je dois pas être le seul semi-trigger parce que ya rien de centré sur le nouveau passeport 😭😂</p>\n</div>',
        createdAt: "1970-01-20T11:42:24.206Z",
        updatedAt: "1970-01-20T11:42:24.206Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c4df43fa63617562109ad",
          username: "theperfectlysadhuman",
          avatar:
            "https://www.gravatar.com/avatar/eda8820689d01fdbb04d398985c49838?s=500&d=retro",
        },
      },
      {
        _id: "645c4e233fa6361756216b37",
        title: null,
        content:
          '<div class="md"><p>Quand ton passeport est aussi grand que ton pays!</p>\n</div>',
        createdAt: "1970-01-20T11:42:33.285Z",
        updatedAt: "1970-01-20T11:42:33.285Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c4e233fa6361756216b35",
          username: "bluAstrid",
          avatar:
            "https://www.gravatar.com/avatar/87f6c8e239f8f2c9b9bf932c4e21b2dc?s=500&d=retro",
        },
      },
      {
        _id: "645c4e533fa636175621ccbf",
        title: null,
        content:
          '<div class="md"><p>Je trouve ça moins élégant disons.</p>\n\n<p>Mais bon pour ce que ça change dans ma vie, hein.</p>\n</div>',
        createdAt: "1970-01-20T11:42:17.625Z",
        updatedAt: "1970-01-20T11:42:17.625Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c4e533fa636175621ccbd",
          username: "terrask",
          avatar:
            "https://www.gravatar.com/avatar/71cd51e81e71d8d6497e4c52c80c3ffb?s=500&d=retro",
        },
      },
      {
        _id: "645c4e833fa6361756222e47",
        title: null,
        content:
          '<div class="md"><p>Ça va prendre un esti de gros sac banane pour traîner ça en voyage  </p>\n\n<p>Edith : Faute</p>\n</div>',
        createdAt: "1970-01-20T11:42:18.496Z",
        updatedAt: "2023-05-11T02:11:35.571Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c4e833fa6361756222e45",
          username: "stefaniied",
          avatar:
            "https://www.gravatar.com/avatar/99bbd085b7799afc692e42b86fcf8359?s=500&d=retro",
        },
      },
      {
        _id: "645c4ee23fa636175622f15c",
        title: null,
        content: '<div class="md"><p>C’est rendu un passe-pas</p>\n</div>',
        createdAt: "1970-01-20T11:42:18.668Z",
        updatedAt: "1970-01-20T11:42:18.668Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c4ee23fa636175622f15a",
          username: "roadrunner345",
          avatar:
            "https://www.gravatar.com/avatar/c37fad90f2a0d5e80548e1b2e1c4ac5a?s=500&d=retro",
        },
      },
      {
        _id: "645c4f113fa63617562352e4",
        title: null,
        content:
          '<div class="md"><p>Je pense que c&#39;est pas pire mais un downgrade quand-même</p>\n</div>',
        createdAt: "1970-01-20T11:42:18.459Z",
        updatedAt: "1970-01-20T11:42:18.459Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c4f113fa63617562352e2",
          username: "ThermosbyThermas",
          avatar:
            "https://www.gravatar.com/avatar/7baaa2d1908d515815546aba36427497?s=500&d=retro",
        },
      },
      {
        _id: "645c4f403fa636175623b46c",
        title: null,
        content:
          '<div class="md"><p>Vraiment pas pratique......\nEncore une niaiserie de Trudeau</p>\n</div>',
        createdAt: "1970-01-20T11:42:19.687Z",
        updatedAt: "1970-01-20T11:42:19.687Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c4f403fa636175623b46a",
          username: "maximooooo",
          avatar:
            "https://www.gravatar.com/avatar/2bbb9740c7181390a79c7b09880c2794?s=500&d=retro",
        },
      },
      {
        _id: "645c4f6f3fa63617562415f4",
        title: null,
        content:
          '<div class="md"><p>Pourquoi est-il bleu comme le passeport des États Unis et de l&#39;UE?</p>\n</div>',
        createdAt: "1970-01-20T11:42:22.438Z",
        updatedAt: "2023-05-11T02:16:09.732Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c4f6f3fa63617562415f2",
          username: "LeoMarius",
          avatar:
            "https://www.gravatar.com/avatar/0b3242671adb02507c4332fe345ff3cb?s=500&d=retro",
        },
      },
      {
        _id: "645c4ff43fa6361756250264",
        title: null,
        content:
          '<div class="md"><p>J&#39;espère qu&#39;on peut au moins le plier et créer un abris temporaire avec</p>\n</div>',
        createdAt: "1970-01-20T11:42:15.525Z",
        updatedAt: "1970-01-20T11:42:15.525Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c4ff43fa6361756250262",
          username: "Bangarazz",
          avatar:
            "https://www.gravatar.com/avatar/653be4b6ebff16cc79ad280094183878?s=500&d=retro",
        },
      },
      {
        _id: "645c50233fa63617562563ec",
        title: null,
        content:
          '<div class="md"><p>Il rentre parfait dans la boite de mon gros picop quand je m&#39;en va passer l&#39;hiver en floride.</p>\n</div>',
        createdAt: "1970-01-20T11:42:18.059Z",
        updatedAt: "1970-01-20T11:42:18.059Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c50233fa63617562563ea",
          username: "Somethingsfishy__",
          avatar:
            "https://www.gravatar.com/avatar/65c3735ca1e0c14da6eb43e2888ad4c1?s=500&d=retro",
        },
      },
      {
        _id: "645c50533fa636175625c574",
        title: null,
        content:
          '<div class="md"><p>Le reste du monde vont être jaloux de notre nouvelle mesure antivol!</p>\n</div>',
        createdAt: "1970-01-20T11:42:19.802Z",
        updatedAt: "1970-01-20T11:42:19.802Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c50533fa636175625c572",
          username: "DFTricks",
          avatar:
            "https://www.gravatar.com/avatar/72cc2f125af5e860c018b56b57029ea0?s=500&d=retro",
        },
      },
      {
        _id: "645c50823fa63617562626fc",
        title: null,
        content:
          '<div class="md"><p>Il est laid...faites moi changer d&#39;idée</p>\n</div>',
        createdAt: "1970-01-20T11:42:25.994Z",
        updatedAt: "2023-05-11T02:20:07.297Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c50823fa63617562626fa",
          username: "LordBaikalOli",
          avatar:
            "https://www.gravatar.com/avatar/ea0d4f0664b0185fca4dc0c96b7a4393?s=500&d=retro",
        },
      },
      {
        _id: "645c50e23fa636175626ea11",
        title: null,
        content: '<div class="md"><p>Faut le plier en quatre</p>\n</div>',
        createdAt: "1970-01-20T11:42:14.827Z",
        updatedAt: "1970-01-20T11:42:14.827Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c50e23fa636175626ea0f",
          username: "IngenuityPositive123",
          avatar:
            "https://www.gravatar.com/avatar/94292931290e9f2ca4524b1116d24de7?s=500&d=retro",
        },
      },
      {
        _id: "645c51113fa6361756274b99",
        title: null,
        content:
          '<div class="md"><p>Il vont tu mettre le nouveau petit flocon ❄️ pis les feuille d’érable sur la couronne 👑 ou pas 😆</p>\n</div>',
        createdAt: "1970-01-20T11:42:15.801Z",
        updatedAt: "1970-01-20T11:42:15.801Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c51113fa6361756274b97",
          username: "Lika3",
          avatar:
            "https://www.gravatar.com/avatar/b79f37e1ece6431126f913dc843a2260?s=500&d=retro",
        },
      },
      {
        _id: "645c513e3fa636175627ad21",
        title: null,
        content:
          '<div class="md"><p>Les étampes seront aussi grosses.</p>\n</div>',
        createdAt: "1970-01-20T11:42:15.614Z",
        updatedAt: "1970-01-20T11:42:15.614Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c513e3fa636175627ad1f",
          username: "Forever_Pancakes",
          avatar:
            "https://www.gravatar.com/avatar/5a1d147c8331ecd8d01a10456e972576?s=500&d=retro",
        },
      },
      {
        _id: "645c516d3fa6361756280ea9",
        title: null,
        content:
          '<div class="md"><p>Il es tu non genré ? On peux tu dire maintenant une passeport ?</p>\n</div>',
        createdAt: "1970-01-20T11:42:17.771Z",
        updatedAt: "1970-01-20T11:42:17.771Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c516d3fa6361756280ea7",
          username: "Majestic_Impress_127",
          avatar:
            "https://www.gravatar.com/avatar/e77004ea00506975e4e3d3f287a306b0?s=500&d=retro",
        },
      },
      {
        _id: "645c51ca3fa6361756289978",
        title: null,
        content:
          '<div class="md"><p>Quel gaspillage d&#39;argent monumental. N&#39;en parlons pas de la dévalorisation du patrimoine non plus ...</p>\n</div>',
        createdAt: "1970-01-20T11:42:28.761Z",
        updatedAt: "1970-01-20T11:42:28.761Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c51ca3fa6361756289976",
          username: "hdfcv",
          avatar:
            "https://www.gravatar.com/avatar/a52eb259dc192eece2f3f597fe630b99?s=500&d=retro",
        },
      },
      {
        _id: "645c51fa3fa636175628fb00",
        title: null,
        content:
          '<div class="md"><p>C’est pour compenser certains complex canayen</p>\n</div>',
        createdAt: "1970-01-20T11:42:27.381Z",
        updatedAt: "1970-01-20T11:42:27.381Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c51fa3fa636175628fafe",
          username: "ZeAntagonis",
          avatar:
            "https://www.gravatar.com/avatar/f53bf0f265213e1af5404ecfe67e38cb?s=500&d=retro",
        },
      },
      {
        _id: "645c522a3fa6361756295c88",
        title: null,
        content:
          '<div class="md"><p>That’s going to be a nightmare to carry around</p>\n</div>',
        createdAt: "1970-01-20T11:42:36.980Z",
        updatedAt: "1970-01-20T11:42:36.980Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c522a3fa6361756295c86",
          username: "ufhfvjjggvgyv",
          avatar:
            "https://www.gravatar.com/avatar/bf10d51f2157d7fef29de030b9585a75?s=500&d=retro",
        },
      },
      {
        _id: "645c525a3fa636175629be10",
        title: null,
        content:
          '<div class="md"><p>Qu’est ce qu’Alexandre Barette fait la ?</p>\n</div>',
        createdAt: "1970-01-20T11:42:38.262Z",
        updatedAt: "1970-01-20T11:42:38.262Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c525a3fa636175629be0e",
          username: "mr13lake89",
          avatar:
            "https://www.gravatar.com/avatar/0a40169688753e7ae81bd2ecf684e086?s=500&d=retro",
        },
      },
      {
        _id: "645c528a3fa63617562a1f98",
        title: null,
        content:
          '<div class="md"><p>Ils auraient pu intégrer la nouvelle couronne aux armoiries.</p>\n</div>',
        createdAt: "1970-01-20T11:42:39.289Z",
        updatedAt: "1970-01-20T11:42:39.289Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c528a3fa63617562a1f96",
          username: "ConstantFife",
          avatar:
            "https://www.gravatar.com/avatar/e1b877c872d8311ed31d4cf683815d7f?s=500&d=retro",
        },
      },
      {
        _id: "645c52bb3fa63617562a8120",
        title: null,
        content:
          '<div class="md"><p>Est-ce qu&#39;on doit acheter une autre chaise pour lui?</p>\n</div>',
        createdAt: "1970-01-20T11:42:41.504Z",
        updatedAt: "1970-01-20T11:42:41.504Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c52bb3fa63617562a811e",
          username: "berlinrain",
          avatar:
            "https://www.gravatar.com/avatar/dff898587c7839549e0fee13948e5869?s=500&d=retro",
        },
      },
      {
        _id: "645c52ea3fa63617562ae2a8",
        title: null,
        content:
          '<div class="md"><p>C&#39;est trop gros.... Si tu es une petite bitch</p>\n</div>',
        createdAt: "1970-01-20T11:42:41.514Z",
        updatedAt: "1970-01-20T11:42:41.514Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c52ea3fa63617562ae2a6",
          username: "Maxtheaxe1",
          avatar:
            "https://www.gravatar.com/avatar/2b287e937268924178c89a38f427b1d2?s=500&d=retro",
        },
      },
      {
        _id: "645c53193fa63617562b4430",
        title: null,
        content:
          '<div class="md"><p>Cristi ça fit même pas sur le toit de ma voiture.</p>\n</div>',
        createdAt: "1970-01-20T11:42:42.172Z",
        updatedAt: "1970-01-20T11:42:42.172Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c53193fa63617562b442e",
          username: "Miserable_Object9961",
          avatar:
            "https://www.gravatar.com/avatar/afb1afbf5f3a509df7450447f8a3de31?s=500&d=retro",
        },
      },
      {
        _id: "645c534a3fa63617562ba5b8",
        title: null,
        content:
          '<div class="md"><p>C’est quoi cet esti de design graphique de calice? Il y a rien qui aligné! Les marges sont pas égales nul part. Ah et pis on va aligner le texte à droite, pourquoi pas?</p>\n</div>',
        createdAt: "1970-01-20T11:42:48.958Z",
        updatedAt: "1970-01-20T11:42:48.958Z",
        genisis: false,
        parentPost: {
          _id: "645c469e3fa636175613eba2",
        },
        author: {
          _id: "645c53493fa63617562ba5b6",
          username: "willyousmith",
          avatar:
            "https://www.gravatar.com/avatar/22a983046dcb72b13766eb5f96198453?s=500&d=retro",
        },
      },
    ],
  },
  {
    _id: "645c50823fa63617562626fc",
    title: null,
    content:
      '<div class="md"><p>Il est laid...faites moi changer d&#39;idée</p>\n</div>',
    createdAt: "1970-01-20T11:42:25.994Z",
    updatedAt: "2023-05-11T02:20:07.297Z",
    genisis: false,
    parentPost: {
      _id: "645c469e3fa636175613eba2",
      title: "Le nouveau passeport Canadien est pas mal gros...",
      content: "",
    },
    thread: {
      _id: "645c469e3fa636175613ebae",
      forum: {
        _id: "645c469e3fa636175613eb9e",
        title: "r/Quebec",
      },
    },
    author: {
      _id: "645c50823fa63617562626fa",
      username: "LordBaikalOli",
      avatar:
        "https://www.gravatar.com/avatar/ea0d4f0664b0185fca4dc0c96b7a4393?s=500&d=retro",
    },
    children: [
      {
        _id: "645c50b13fa6361756268884",
        title: null,
        content:
          '<div class="md"><p>L&#39;apparence de mon passeport est probablement la chose dont me je calice le plus dans l&#39;univers</p>\n</div>',
        createdAt: "1970-01-20T11:42:30.262Z",
        updatedAt: "1970-01-20T11:42:30.262Z",
        genisis: false,
        parentPost: {
          _id: "645c50823fa63617562626fc",
        },
        author: {
          _id: "645c50b13fa6361756268882",
          username: "Soviet_Beer",
          avatar:
            "https://www.gravatar.com/avatar/8983de095327fb704838b5eff69dcbfa?s=500&d=retro",
        },
      },
    ],
  },
  {
    _id: "645c4f6f3fa63617562415f4",
    title: null,
    content:
      '<div class="md"><p>Pourquoi est-il bleu comme le passeport des États Unis et de l&#39;UE?</p>\n</div>',
    createdAt: "1970-01-20T11:42:22.438Z",
    updatedAt: "2023-05-11T02:16:09.732Z",
    genisis: false,
    parentPost: {
      _id: "645c469e3fa636175613eba2",
      title: "Le nouveau passeport Canadien est pas mal gros...",
      content: "",
    },
    thread: {
      _id: "645c469e3fa636175613ebae",
      forum: {
        _id: "645c469e3fa636175613eb9e",
        title: "r/Quebec",
      },
    },
    author: {
      _id: "645c4f6f3fa63617562415f2",
      username: "LeoMarius",
      avatar:
        "https://www.gravatar.com/avatar/0b3242671adb02507c4332fe345ff3cb?s=500&d=retro",
    },
    children: [
      {
        _id: "645c4fc53fa636175624a0d7",
        title: null,
        content: '<div class="md"><p>En UE c’est rouge plutot</p>\n</div>',
        createdAt: "1970-01-20T11:42:36.661Z",
        updatedAt: "1970-01-20T11:42:36.661Z",
        genisis: false,
        parentPost: {
          _id: "645c4f6f3fa63617562415f4",
        },
        author: {
          _id: "645c4fc53fa636175624a0d5",
          username: "DerWaschbar",
          avatar:
            "https://www.gravatar.com/avatar/53623cf5300e00125ceaa895ad2607d8?s=500&d=retro",
        },
      },
    ],
  },
  {
    _id: "645c4e833fa6361756222e47",
    title: null,
    content:
      '<div class="md"><p>Ça va prendre un esti de gros sac banane pour traîner ça en voyage  </p>\n\n<p>Edith : Faute</p>\n</div>',
    createdAt: "1970-01-20T11:42:18.496Z",
    updatedAt: "2023-05-11T02:11:35.571Z",
    genisis: false,
    parentPost: {
      _id: "645c469e3fa636175613eba2",
      title: "Le nouveau passeport Canadien est pas mal gros...",
      content: "",
    },
    thread: {
      _id: "645c469e3fa636175613ebae",
      forum: {
        _id: "645c469e3fa636175613eb9e",
        title: "r/Quebec",
      },
    },
    author: {
      _id: "645c4e833fa6361756222e45",
      username: "stefaniied",
      avatar:
        "https://www.gravatar.com/avatar/99bbd085b7799afc692e42b86fcf8359?s=500&d=retro",
    },
    children: [
      {
        _id: "645c4eb23fa6361756228fcf",
        title: null,
        content: '<div class="md"><p>J&#39;aime Édith Piaf aussi.</p>\n</div>',
        createdAt: "1970-01-20T11:42:21.312Z",
        updatedAt: "1970-01-20T11:42:21.312Z",
        genisis: false,
        parentPost: {
          _id: "645c4e833fa6361756222e47",
        },
        author: {
          _id: "645c4eb23fa6361756228fcd",
          username: "Bakyumu",
          avatar:
            "https://www.gravatar.com/avatar/7e58030e43133155a9c32f375f3825d5?s=500&d=retro",
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
