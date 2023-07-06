import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "@chakra-ui/react";
import { ForumSummaryCard } from "./card";

const meta: Meta<typeof ForumSummaryCard> = {
  title: "Forum Summary Card",
  component: ForumSummaryCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ForumSummaryCard>;

export const Default: Story = {
  args: {
    forum: {
      _id: "6452fdd83b6d0cccd956dda9",
      title: "r/AeroPress",
      image:
        "https://www.gravatar.com/avatar/35517f71f0adc4989169c6a67feca6cb?s=500&d=identicon",
      createdAt: "1970-01-20T11:32:29.087Z",
      description: "",
      author: {
        _id: "6452fdd83b6d0cccd956dda7",
        username: "Rohy27",
        avatar:
          "https://www.gravatar.com/avatar/fbef5709342471e92d2206a5b2119bf9?s=500&d=retro",
        createdAt: "1970-01-18T10:02:37.385Z",
      } as any,
      threads: [
        {
          _id: "6452fdd83b6d0cccd956ddaf",
          createdAt: "2023-05-04T00:35:36.337Z",
          children: [
            {
              _id: "6452fdd93b6d0cccd956ddc3",
            },
            {
              _id: "6452fde83b6d0cccd956eda7",
            },
            {
              _id: "6452fdf63b6d0cccd956fd8b",
            },
            {
              _id: "6452fe033b6d0cccd9570d6f",
            },
            {
              _id: "6452fe113b6d0cccd9571d53",
            },
            {
              _id: "6452fe203b6d0cccd9572d37",
            },
            {
              _id: "6452fe2d3b6d0cccd9573d1b",
            },
            {
              _id: "6452fe3b3b6d0cccd9574cff",
            },
            {
              _id: "6452fe563b6d0cccd95764db",
            },
            {
              _id: "6452fe643b6d0cccd95774bf",
            },
            {
              _id: "6452fe713b6d0cccd95784a3",
            },
            {
              _id: "6452fe7f3b6d0cccd9579487",
            },
            {
              _id: "6452fe9a3b6d0cccd957ac63",
            },
            {
              _id: "6452feaa3b6d0cccd957bc47",
            },
            {
              _id: "6452fec53b6d0cccd957d423",
            },
            {
              _id: "6452fee23b6d0cccd957ebff",
            },
            {
              _id: "6452fef23b6d0cccd957fbe3",
            },
            {
              _id: "6452ff003b6d0cccd9580bc7",
            },
            {
              _id: "6452ff1d3b6d0cccd95823a3",
            },
            {
              _id: "6452ff2c3b6d0cccd9583387",
            },
            {
              _id: "6452ff4b3b6d0cccd9584b63",
            },
            {
              _id: "6452ff583b6d0cccd9585b47",
            },
            {
              _id: "6452ff663b6d0cccd9586b2b",
            },
            {
              _id: "6452ff773b6d0cccd9587b0f",
            },
            {
              _id: "6452ff863b6d0cccd9588af3",
            },
            {
              _id: "6452ffa43b6d0cccd958a2cf",
            },
            {
              _id: "6452ffb23b6d0cccd958b2b3",
            },
            {
              _id: "6452ffc13b6d0cccd958c297",
            },
            {
              _id: "6452ffcf3b6d0cccd958d27b",
            },
            {
              _id: "6452ffdd3b6d0cccd958e25f",
            },
            {
              _id: "6452ffef3b6d0cccd958f243",
            },
            {
              _id: "6452fffd3b6d0cccd9590227",
            },
            {
              _id: "6453000c3b6d0cccd959120b",
            },
            {
              _id: "6453001b3b6d0cccd95921ef",
            },
          ] as any,
        },
      ] as any,
    } as any,
  },
};
