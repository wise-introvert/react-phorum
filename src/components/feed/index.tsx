import { FC, ReactElement, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { VStack, Box } from "@chakra-ui/react";
import { get } from "lodash";

import { GetFeedQuery } from "./graphql";
import { PostCard } from "../post-summary";

export const Feed: FC<{}> = (): ReactElement => {
  const { data, error, loading } = useQuery<{ posts: Interfaces.Post[] }>(
    GetFeedQuery
  );
  useEffect(() => {
    console.dir(data);
  }, [data]);

  return (
    <Box h={"full"} w={"full"}>
      <VStack py={3} spacing={2}>
        {get(data, "posts", []).map(
          (post: Interfaces.Post): ReactElement => (
            <PostCard
              key={get(post, "_id")}
              loading={loading}
              error={get(error, "message", undefined)}
              post={post}
              events={{} as any}
              temp={{} as any}
            />
          )
        )}
      </VStack>
    </Box>
  );
};
