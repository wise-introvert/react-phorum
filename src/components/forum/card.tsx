import { ReactElement, FC } from "react";
import {
  Tr,
  Td,
  Stat,
  Show,
  StatLabel,
  StatNumber,
  Hide,
  Avatar,
  Text,
  Link,
  Box,
} from "@chakra-ui/react";
import { get, isEmpty } from "lodash";
import dayjs from "dayjs";
import NextLink from "next/link";

export interface ForumSummaryCardProps {
  forum: Interfaces.Forum;
}

export const ForumSummaryCard: FC<ForumSummaryCardProps> = ({
  forum,
}: ForumSummaryCardProps): ReactElement => {
  if (true) {
    return (
      <Box
        whiteSpace={"normal"}
        wordBreak={"break-word"}
        my={"6"}
        w={"full"}
        minH={["sm", "md", "lg"]}
        display={"grid"}
        gridTemplateRows={"38px 5fr 48px"}
        borderRadius={"md"}
        borderColor={"black"}
        borderWidth={"thin"}
        shadow={"md"}
        overflow={"hidden"}
      >
        <Box
          h={"full"}
          w={"full"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          px={"4"}
          py={"2"}
        >
          <Avatar
            border={"1px solid black"}
            h={"28px"}
            maxW={"28px"}
            mr={4}
            name={get(forum, "author.username")}
            src={get(forum, "author.avatar")}
          />
          <Text mr={2} fontSize={"xs"} color={"blackAlpha.600"}>
            u/{get(forum, "author.username")}
          </Text>
          <Text mr={2} fontSize={"xs"} color={"blackAlpha.700"}>
            |
          </Text>
          <Text mr={2} fontSize={"xs"} color={"blackAlpha.600"}>
            sf/{get(forum, "title")}
          </Text>
          <Text mr={2} fontSize={"xs"} color={"blackAlpha.700"}>
            |
          </Text>
          <Text mr={2} fontSize={"xs"} color={"blackAlpha.600"}>
            2h
          </Text>
        </Box>
        <Box h={"full"} w={"full"} bg={"orange"}></Box>
        <Box h={"full"} w={"full"} bg={"red"}></Box>
      </Box>
    );
  }

  return (
    <Box
      whiteSpace={"normal"}
      wordBreak={"break-word"}
      my={"6"}
      w={"auto"}
      minH={["18", "28", "32"]}
      display={"grid"}
      gridTemplateColumns={[
        "50% 1fr repeat(3, minmax(16%, 1fr))",
        "60% 1fr repeat(4, 10%)",
        "70% 1fr repeat(4, 8%)",
      ]}
      gridTemplateRows={"1fr"}
      borderRadius={"lg"}
      borderColor={"black"}
      borderWidth={"thin"}
      shadow={"md"}
      pr={4}
    >
      <Box
        h={"full"}
        w={"full"}
        display={"flex"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        p={4}
        flexDirection={"column"}
      >
        <Text w={"full"} fontWeight={"bold"} fontSize={["md", "md", "lg"]}>
          {get(forum, "title", "na")}
        </Text>
        <Text
          w={"full"}
          fontWeight={"200"}
          fontSize={["xs", "xs", "sm"]}
          color={"gray.600"}
          noOfLines={4}
        >
          {get(forum, "description", "na")}
        </Text>
      </Box>
      <Box w={"full"}></Box>
      <Box h={"full"} w={"full"} display={"grid"} placeItems={"center"}>
        <Link as={NextLink} href={`/user/${get(forum, "author._id")}`}>
          <Avatar
            name={get(forum, "author.username", "na")}
            src={get(forum, "author.avatar")}
            size="xs"
          />
        </Link>
      </Box>
      <Box h={"full"} w={"full"} display={"grid"} placeItems={"center"}>
        <Stat>
          <StatLabel
            fontSize={"xs"}
            color={"blackAlpha.500"}
            fontWeight={"100"}
            textAlign={"center"}
          >
            Threads
          </StatLabel>
          <StatNumber fontSize={["sm", "md"]} textAlign={"center"}>
            <Text>{get(forum, "threads", []).length}</Text>
          </StatNumber>
        </Stat>
      </Box>
      <Show above={"sm"}>
        <Box h={"full"} w={"full"} display={"grid"} placeItems={"center"}>
          <Stat>
            <StatLabel
              fontSize={"xs"}
              color={"blackAlpha.500"}
              fontWeight={"100"}
              textAlign={"center"}
            >
              Posts
            </StatLabel>
            <StatNumber fontSize={["sm", "md"]} textAlign={"center"}>
              <Text>
                {(get(forum, "threads", []) as Array<Interfaces.Thread>).reduce(
                  (acc: number, curr: Interfaces.Thread): number => {
                    return acc + get(curr, "children", []).length;
                  },
                  0
                )}
              </Text>
            </StatNumber>
          </Stat>
        </Box>
      </Show>
      <Box h={"full"} w={"full"} display={"grid"} placeItems={"center"}>
        <Stat>
          <StatLabel
            fontSize={"xs"}
            color={"blackAlpha.500"}
            fontWeight={"100"}
            textAlign={"center"}
          >
            Last
          </StatLabel>
          <StatNumber fontSize={["sm", "md"]} textAlign={"center"}>
            <Text>
              {dayjs(
                get(forum, "createdAt", new Date().toLocaleString("en"))
              ).fromNow(true)}
            </Text>
          </StatNumber>
        </Stat>
      </Box>
    </Box>
  );
};
