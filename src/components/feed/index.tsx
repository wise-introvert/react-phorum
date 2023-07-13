import { FC, ReactElement, MouseEvent } from "react";
import { useQuery } from "@apollo/client";
import { VStack, Box, Text, Icon, Spinner, useTheme } from "@chakra-ui/react";
import { get, isEmpty } from "lodash";
import { BiErrorAlt } from "react-icons/bi";
import { FiRefreshCw } from "react-icons/fi";

import { GetFeedQuery } from "./graphql";
import { PostCard } from "../post-summary";
import { Button } from "../button";

export const Feed: FC<{}> = (): ReactElement => {
  const { data, error, loading, refetch } = useQuery<{
    posts: Interfaces.Post[];
  }>(GetFeedQuery, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-first",
  });
  const theme = useTheme();

  if (error || loading) {
    return (
      <Box h={"full"} w={"full"} display={"grid"} placeItems={"center"}>
        {error ? (
          <Button
            onClick={(e: MouseEvent<HTMLButtonElement>): void => {
              e.preventDefault();
              e.stopPropagation();
              refetch();
            }}
            leftIcon={<Icon as={FiRefreshCw} />}
            size={"sm"}
            border={"2px solid black"}
            variant={"ghost"}
          >
            retry
          </Button>
        ) : (
          <Spinner />
        )}
      </Box>
    );
  }

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
              temp={
                {
                  image: get(post, "image"),
                } as any
              }
            />
          )
        )}
      </VStack>
    </Box>
  );
};
