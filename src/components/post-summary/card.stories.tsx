import type { Meta, StoryObj } from '@storybook/react';

import { PostCard } from '.';
import { posts } from '../../utils/fake-data';

const meta: Meta<typeof PostCard> = {
  title: 'Post Card',
  component: PostCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PostCard>;

const data: any = posts[0];

export const Default: Story = {
  args: {
    temp: {
      trend: Math.random() > 0.5 ? -1 : 1,
      votes: 1209098725,
      views: 2986509865,
      image:
        'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80',
    },
    events: {
      onMenuItemClick: (): void => {},
      onThreadClick: () => {
        alert('thread clicked ');
      },
      onPostClick: () => {
        alert('post clicked ');
      },
      onForumClick: () => {
        alert('forum clicked ');
      },
      onUserClick: () => {
        alert('user clicked ');
      },
    },
    post: data,
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
    post: {} as any,
  },
};

export const Error: Story = {
  args: {
    error: 'Something went wrong!',
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

export const IsNotGenisis: Story = {
  args: {
    ...Default.args,
    post: {
      ...(Default.args!.post as any),
      genisis: false,
      thread: {
        _id: '6as5df76a5s8f6a8s9d56',
      },
      title: '',
    },
  },
};

export const NoContent: Story = {
  args: {
    ...Default.args,
    post: {
      ...(Default.args!.post as any),
      content: '',
    },
  },
};
