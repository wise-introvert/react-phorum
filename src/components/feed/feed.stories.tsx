import type { Meta, StoryObj } from '@storybook/react';

import { Feed } from '.';
import { GetFeedQuery } from './graphql';
import { posts } from '../../utils/fake-data';

const meta: Meta<typeof Feed> = {
  title: 'Feed',
  component: Feed,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Feed>;

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

export const Loading: Story = {
  parameters: {
    ...Default.parameters,
    apolloClient: {
      mocks: [
        {
          delay: 109875098102958,
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
  },
};

export const ErrorState: Story = {
  parameters: {
    ...Default.parameters,
    apolloClient: {
      mocks: [
        {
          delay: 6000,
          request: {
            query: GetFeedQuery,
          },
          error: new Error('Something went wrong.'),
        },
      ],
    },
  },
};

/*
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
