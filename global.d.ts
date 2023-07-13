declare module "*.css";

/*
declare namespace Interfaces {
  export interface Forum {
    id: string;
    title: string;
    summary: string;
    threads: NestedArray<Thread>;
    createdAt: string;
    updatedAt: string;
    author: Nested<User>;
  }

  export interface Thread {
    id: string;
    title: string;
    participants: NestedArray<User>;
    posts: NestedArray<Post>;
    author: Nested<User>;
    bumpedAt: string;
    bumpLimit: number;
    bumpCount: number;
    createdAt: string;
    updatedAt: string;
    forum: Nested<Forum>;
  }

  export interface Post {
    id: string;
    isRoot: boolean;
    author: Nested<User>;
    title: string;
    content: string;
    parentThread: Nested<Thread> | undefined;
    parentPost: Nested<Post> | undefined;
    children: NestedArray<Post[]>;
    createdAt: string;
    updatedAt: string;
  }

  export interface User {
    id: string;
    username: string;
    password: string;
    avatarUrl: string;
    joinedDate: string;
    posts: NestedArray<Post>;
    threads: NestedArray<Thread>;
    forums: NestedArray<Forum>;
  }

  export type Nested<T = any> = T | string;

  export type NestedArray<T = any> = (T | string)[];
}
*/

declare global {
  export const BULLET: string = "•";
}

declare namespace Interfaces {
  export interface Theme {
    colors: Record<
      "primary" | "black" | "white" | "darkgray" | "lightgray",
      string
    >;
  }

  export interface Thread {
    _id: string;
    author: User;
    children: Post[];
    genisis: Post;
    forum: Forum;
    createdAt: DateTime;
    updatedAt: DateTime;
  }

  export interface User {
    _id: string;
    username: string;
    password: string;
    description: string;
    forums: Forum[];
    threads: Thread[];
    posts: Post[];
    avatar: string;
    createdAt: DateTime;
    updatedAt: DateTime;
  }

  export interface Forum {
    _id: string;
    title: string;
    description: string;
    image: string;
    author: User;
    posts: Post[];
    threads: Array<Thread> | ((limit?: number) => Thread[]);
    createdAt: DateTime;
    updatedAt: DateTime;
  }

  export interface Post {
    _id: string;
    title?: string;
    content?: string;
    author?: User;
    thread?: Thread;
    parentPost?: Post;
    children: Post[];
    genisis?: boolean;
    createdAt?: DateTime;
    updatedAt?: DateTime;
  }

  type DateTime = string;

  export interface CreatePostInput {
    title: string;
    content: string;
    author: string;
    forum: string;
    genisis?: boolean;
  }

  export interface CreateForumInput {
    title: string;
    description?: string;
    image?: string;
    author: string;
  }

  export interface UserRegistrationInput {
    username: string;
    password: string;
    confirmPassword: string;
    description?: string;
    avatar?: string;
  }

  export interface UserLoginInput {
    username: string;
    password: string;
  }
}

declare namespace InterfacesWithBumping {
  export interface Forum {
    id: string;
    title: string;
    summary: string;
    createdAt: string;
    updatedAt: string;
    author: Nested<User>;
  }

  export interface Thread {
    id: string;
    title: string;
    author: string;
    bumpedAt: string;
    bumpLimit: number;
    bumpCount: number;
    createdAt: string;
    updatedAt: string;
    forum: string;
    cooldown: string;
  }

  export interface Post {
    id: string;
    isRoot: boolean;
    author: string;
    title: string;
    content: string;
    parentThread?: string;
    parentPost?: string;
    createdAt: string;
    updatedAt: string;
  }

  export interface User {
    id: string;
    username: string;
    password: string;
    avatarUrl: string;
    joinedDate: string;
  }

  export type Nested<T = any> = T | string;

  export type NestedArray<T = any> = (T | string)[];
}
