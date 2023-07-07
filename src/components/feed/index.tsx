import { FC, ReactElement, useEffect, MouseEvent, useState } from "react";
import { useQuery } from "@apollo/client";
import { VStack, Box, Text, Button, Icon } from "@chakra-ui/react";
import { get, isEmpty } from "lodash";
import { BiErrorAlt } from "react-icons/bi";
import { FiRefreshCw } from "react-icons/fi";

import { GetFeedQuery } from "./graphql";
import { PostCard } from "../post-summary";

export const Feed: FC<{}> = (): ReactElement => {
  const { data, error, loading, refetch } = useQuery<{
    posts: Interfaces.Post[];
  }>(GetFeedQuery, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-first",
  });
  const [refetchFlag, setRefetchFlag] = useState<boolean>(false);

  useEffect(() => {
    if (!isEmpty(get(data, "posts", []))) {
      setRefetchFlag(false);
    } else {
      setRefetchFlag(!!error);
    }
  }, [data]);

  if (refetchFlag || error) {
    return (
      <Box
        w={"full"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Button
          isLoading={loading}
          disabled={loading}
          border={"1px solid black"}
          onClick={(e: MouseEvent<HTMLButtonElement>): void => {
            e.preventDefault();
            e.stopPropagation();

            refetch();
          }}
          bg={"white"}
          boxShadow={"0 4px 6px rgba(0, 0, 0, 0.1)"}
          aria-label={"refresh"}
          leftIcon={<Icon as={FiRefreshCw} />}
        >
          Refresh
        </Button>
      </Box>
    );
  }

  return (
    <Box h={"full"} w={"full"}>
      <VStack py={3} spacing={2}>
        {(loading && !error
          ? ([{}, {}, {}] as any)
          : get(data, "posts", [])
        ).map(
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
