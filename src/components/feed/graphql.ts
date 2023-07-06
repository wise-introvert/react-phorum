import { gql } from "@apollo/client";

export const GetFeedQuery = gql`
  query GetFeed {
    posts {
      _id
      title
      content
      createdAt
      updatedAt
      genisis
      parentPost {
        _id
        title
        content
      }
      thread {
        _id
        forum {
          _id
          title
        }
      }
      author {
        _id
        username
        avatar
      }
      children {
        _id
        title
        content
        createdAt
        updatedAt
        genisis
        parentPost {
          _id
        }
        author {
          _id
          username
          avatar
        }
      }
    }
  }
`;
