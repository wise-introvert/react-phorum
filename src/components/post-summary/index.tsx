import { useEffect, ReactElement, FC, useState, MouseEvent } from 'react';
import {
  useTheme,
  useColorModeValue,
  IconButton,
  UnorderedList,
  OrderedList,
  ListItem,
  Avatar,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Spinner,
  Box,
  Icon,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Image,
} from '@chakra-ui/react';
import { get, isEmpty } from 'lodash';
import dayjs from 'dayjs';
import {
  BiComment,
  BiTrendingUp,
  BiTrendingDown,
  BiDotsVerticalRounded,
  BiErrorAlt,
  BiArrowToRight,
  BiChevronUpCircle,
  BiChevronDownCircle,
} from 'react-icons/bi';
import { FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import he from 'he';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import emoji from 'remark-emoji';

import { formatNumber } from '../../utils';
import { Button } from '..';

const BULLET: string = '•';

// TODO: export this along with the actual component to
// it's own file ( react-markdown.tsx, perhaps? )
const renderers = {
  div: (props: any) => <Box {...props} />,
  p: (props: any) => (
    <Text
      as={`h${props.level}`}
      fontSize={{ base: 'sm', md: 'md' }}
      my={2}
      {...props}
    />
  ),
  span: (props: any) => (
    <Text
      as={`h${props.level}`}
      fontSize={{ base: 'xs', md: 'sm' }}
      my={2}
      {...props}
    />
  ),
  h1: (props: any) => (
    <Text
      as={`h${props.level}`}
      fontSize={{ base: 'lg', md: 'xl' }}
      fontWeight={'bold'}
      my={2}
      {...props}
    />
  ),
  h2: (props: any) => (
    <Text
      as={`h${props.level}`}
      fontSize={{ base: 'md', md: 'lg' }}
      my={2}
      fontWeight={'bold'}
      {...props}
    />
  ),
  h3: (props: any) => (
    <Text
      as={`h${props.level}`}
      fontSize={{ base: 'sm', md: 'md' }}
      fontWeight={'bold'}
      my={2}
      {...props}
    />
  ),
  h4: (props: any) => (
    <Text
      as={`h${props.level}`}
      fontWeight={'bold'}
      fontSize={{ base: 'sm', md: 'md' }}
      my={2}
      {...props}
    />
  ),
  h5: (props: any) => (
    <Text
      as={`h${props.level}`}
      fontSize={{ base: 'xs', md: 'sm' }}
      fontWeight={'bold'}
      my={2}
      {...props}
    />
  ),
  h6: (props: any) => (
    <Text
      as={`h${props.level}`}
      fontWeight={'bold'}
      fontSize={{ base: 'xs', md: 'sm' }}
      my={2}
      {...props}
    />
  ),
  strong: (props: any) => <Text as="strong" fontWeight="semibold" {...props} />,
  em: (props: any) => <Text as="em" fontStyle="italic" {...props} />,
  code: (props: any) => (
    <Text as="code" borderRadius="sm" px={1} bg="gray.100" {...props} />
  ),
  blockquote: (props: any) => (
    <Text
      as="blockquote"
      fontStyle="italic"
      borderLeft="4px"
      borderColor="gray.200"
      pl={4}
      {...props}
    />
  ),
  a: (props: any) => (
    <Text
      as="a"
      color="blue.500"
      textDecoration="underline"
      _hover={{ color: 'blue.600' }}
      {...props}
    />
  ),
  inlineCode: (props: any) => (
    <Text as="code" borderRadius="sm" px={1} bg="gray.100" {...props} />
  ),
  ul: (props: any) => (
    <UnorderedList {...props} fontSize={{ base: 'sm', md: 'md' }} />
  ),
  ol: (props: any) => (
    <OrderedList {...props} fontSize={{ base: 'sm', md: 'md' }} />
  ),
  li: (props: any) => (
    <ListItem {...props} fontSize={{ base: 'sm', md: 'md' }} />
  ),
  image: (props: any) => (
    <Image alt={'any'} my={2} borderRadius="md" shadow="md" {...props} />
  ),
};

export interface PostCardProps {
  post: Interfaces.Post;
  loading?: boolean;
  error?: string;
  temp: {
    votes?: number;
    views?: number;
    image?: string;
    trend: number;
  };
  events: {
    onThreadClick: (...args: any[]) => any;
    onUserClick: (...args: any[]) => any;
    onForumClick: (...args: any[]) => any;
    onPostClick: (...args: any[]) => any;
    onMenuItemClick: (...args: any) => any;
  };
}

export const PostCard: FC<PostCardProps> = ({
  post,
  temp: { views, votes, image, trend },
  events: { onThreadClick, onUserClick, onPostClick, onMenuItemClick },
  loading,
  error,
}: PostCardProps): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  const [expand, setExpand] = useState<boolean>(false);
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [genisis, setGenisis] = useState<boolean>(false);
  const theme: Interfaces.Theme = useTheme<Interfaces.Theme>();
  const bg: string = useColorModeValue(
    theme.colors.white,
    theme.colors.darkgray
  );
  const leftTopBorder: string = `2px solid ${theme.colors.black}`;
  const rightBottomBorder: string = 'unset !important';
  const color: string = useColorModeValue(
    theme.colors.black,
    theme.colors.primary
  );
  const textColor: string = useColorModeValue(
    theme.colors.darkgray,
    theme.colors.white
  );
  const subTextColor: string = useColorModeValue(
    theme.colors.darkgray,
    theme.colors.lightgray
  );
  const borderColor: string = useColorModeValue(
    theme.colors.black,
    theme.colors.darkgray
  );

  useEffect(() => {
    setGenisis(get(post, 'genisis', true));
  }, [post]);

  if (error || (!loading && isEmpty(post))) {
    return <PostError />;
  }

  return (
    <Box
      whiteSpace={'normal'}
      wordBreak={'break-word'}
      w={'full'}
      display={'grid'}
      gridTemplateRows={`38px 5fr${genisis && ' 48px'}`}
      borderRadius={'md'}
      border={`2px solid ${borderColor}`}
      overflow={'hidden'}
      height={'fit-content'}
      pos={'relative'}
      bg={bg}
      onClick={(e: MouseEvent<HTMLDivElement>): void => {
        e.stopPropagation();
        setOpen(false);
      }}
    >
      {loading ? (
        <Box
          h={'full'}
          w={'full'}
          top={0}
          bottom={0}
          right={0}
          left={0}
          backdropFilter={'blur(10px)'}
          bg={'whiteAlpha.500'}
          borderRadius={'md'}
          display={'grid'}
          placeItems={'center'}
          position={'absolute'}
          zIndex={1098235098151}
        >
          <Spinner />
        </Box>
      ) : (
        <>
          <Box
            position={'relative'}
            {...(genisis && {
              borderBottom: '2px solid black',
            })}
            h={'full'}
            w={'full'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            px={'4'}
            pt={'2'}
            pb={genisis ? '2' : '0'}
          >
            <Avatar
              border={'2px solid black'}
              h={'28px'}
              maxW={'28px'}
              mr={[2, 2, 3]}
              name={get(post, 'author.username')}
              src={get(post, 'author.avatar')}
              onClick={(e: MouseEvent<any>): void => {
                e.stopPropagation();
                onUserClick();
              }}
            />
            <Text
              cursor={'pointer'}
              onClick={(e: MouseEvent<any>): void => {
                e.stopPropagation();
                onUserClick();
              }}
              to={`#`}
              as={Link}
              mr={[1, 1, 2]}
              fontSize={['2xs', 'xs']}
              color={textColor}
              _hover={{
                textDecoration: 'underline',
              }}
            >
              u-{get(post, 'author.username')}
            </Text>
            {genisis && (
              <>
                <Text mr={[1, 1, 2]} fontSize={'xs'} color={textColor}>
                  {BULLET}
                </Text>
                <Text
                  cursor={'pointer'}
                  onClick={(e: MouseEvent<any>): void => {
                    e.stopPropagation();
                    onThreadClick();
                  }}
                  to={`#`}
                  as={Link}
                  mr={[1, 1, 2]}
                  fontSize={['2xs', 'xs']}
                  color={textColor}
                  _hover={{
                    textDecoration: 'underline',
                  }}
                >
                  #{get(post, '_id', '').slice(0, 6)}(Current)
                </Text>
              </>
            )}
            <Text mr={[1, 1, 2]} fontSize={['2xs', 'xs']} color={textColor}>
              {BULLET}
            </Text>
            <Text mr={[1, 1, 2]} fontSize={['2xs', 'xs']} color={textColor}>
              {dayjs(get(post, 'createdAt')).fromNow(true)}
            </Text>
            <Menu isOpen={open}>
              <MenuButton
                onClick={(e: MouseEvent<HTMLButtonElement>): void => {
                  e.stopPropagation();
                  setOpen((old: boolean): boolean => !old);
                }}
                aria-label={'options'}
                variant={'ghost'}
                _hover={{}}
                _focus={{
                  border: '2px solid black',
                }}
                _active={{
                  border: '2px solid black',
                }}
                position={'absolute'}
                right={4}
                as={IconButton}
                icon={<Icon as={BiDotsVerticalRounded} />}
                top={2}
                color={textColor}
                bottom={0}
                boxSize={[4, 5, 6]}
              />
              <MenuList
                boxShadow={'0px 2px 4px rgba(0, 0, 0, 0.1)'}
                border={'2px solid black'}
                rounded={'md'}
                fontSize={'sm'}
                fontWeight={'semibold'}
                p={0}
                m={0}
              >
                <MenuItem
                  p={0}
                  m={0}
                  py={1}
                  px={1}
                  onClick={(e: MouseEvent<any>): void => {
                    e.stopPropagation();
                    setOpen(false);
                    onMenuItemClick('edit');
                  }}
                >
                  Edit
                </MenuItem>
                <MenuDivider p={0} m={0} bg={'black'} />
                <MenuItem
                  p={0}
                  m={0}
                  py={1}
                  px={1}
                  onClick={(e: MouseEvent<any>): void => {
                    e.stopPropagation();
                    setOpen(false);
                    onMenuItemClick('delete');
                  }}
                >
                  Delete
                </MenuItem>
                <MenuDivider p={0} m={0} bg={'black'} />
                <MenuItem
                  p={0}
                  m={0}
                  py={1}
                  px={1}
                  onClick={(e: MouseEvent<any>): void => {
                    e.stopPropagation();
                    setOpen(false);
                    onMenuItemClick('share');
                  }}
                >
                  Share
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          {/*isEmpty(image) || !genisis ? (
            <Box borderBottom={"2px solid black"} h={"full"} w={"full"}>
              {isEmpty(get(post, "content")) ? (
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  h={"full"}
                  w={"full"}
                >
                  <Icon as={BiErrorAlt} boxSize={10} color={"blackAlpha.500"} />
                  <Text>Content unavailable!</Text>
                </Box>
              ) : (
                <Box
                  p={"2"}
                  pb={4}
                  textAlign={"left"}
                  h={"full"}
                  w={"full"}
                  position={"relative"}
                >
                  <ReactMarkdown
                    className={
                      expand ? "react-markdown-full" : "react-markdown-short"
                    }
                    components={renderers}
                    remarkPlugins={[remarkGfm, emoji]}
                    rehypePlugins={[rehypeRaw]}
                  >
                    {he.decode(
                      `${
                        isEmpty(post!.title)
                          ? ""
                          : `### ${get(post, "title", "Dummy title")}\n`
                      }${get(post, "content", "")}`
                    )}
                  </ReactMarkdown>
                  {get(post, "content", "").length > 150 && (
                    <Button
                      width={"full"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"flex-end"}
                      bg={"transparent"}
                      size={"xs"}
                      variant={"link"}
                      textDecoration={"none"}
                      mt={expand ? -1 : 2}
                      onClick={(e: MouseEvent<HTMLButtonElement>): void => {
                        e.stopPropagation();
                        setExpand((old: boolean): boolean => !old);
                      }}
                    >
                      {expand ? "^^^ hide" : "...read more"}
                    </Button>
                  )}
                </Box>
              )}
            </Box>
          ) : (
          )*/}
          <Box
            h={'full'}
            w={'full'}
            {...(genisis && image
              ? {
                  display: 'grid',
                  gridTemplateRows: '1fr',
                  gridTemplateColumns: [
                    '100px 1px 7fr',
                    '125px 1px 7fr',
                    '150px 1px 7fr',
                  ],
                }
              : {})}
          >
            {genisis && image && (
              <>
                <Box p={'2'} h={'full'} w={'full'}>
                  <Image
                    objectFit={'contain'}
                    border={'2px solid black'}
                    rounded={'md'}
                    w={'full'}
                    alt={'image'}
                    src={
                      image ??
                      'https://wildskiesresort.com/wp-content/uploads/woocommerce-placeholder-300x300@2x.png'
                    }
                  />
                </Box>
                <Box bg={'black'} h={'full'} w={'2px'} />
              </>
            )}
            {isEmpty(get(post, 'content')) ? (
              <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                flexDirection={'column'}
                h={'full'}
                w={'full'}
                py={'6'}
              >
                <Icon
                  as={BiErrorAlt}
                  boxSize={10}
                  color={theme.colors.lightgray}
                />
                <Text>Content unavailable!</Text>
              </Box>
            ) : (
              <Box
                onMouseLeave={(e: MouseEvent<HTMLDivElement>): void => {
                  e.stopPropagation();
                  setShowIcon(false);
                }}
                onMouseEnter={(e: MouseEvent<HTMLDivElement>): void => {
                  e.stopPropagation();
                  setShowIcon(true);
                }}
                p={'2'}
                pb={4}
                textAlign={'left'}
                h={'fit-content'}
                w={'full'}
                position={'relative'}
              >
                <Text
                  {...(!expand && {
                    noOfLines: 4,
                  })}
                >
                  <Box
                    display={'flex'}
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'start'}
                  >
                    <Text
                      fontWeight={'regular'}
                      fontSize={'xs'}
                      color={subTextColor}
                      textDecorationColor={'blackAlpha.800'}
                      as={Link}
                      _hover={{
                        textDecoration: 'underline',
                      }}
                      to={`/thread/${get(post, '_id', '').slice(0, 6)}`}
                    >
                      {`#${get(post, 'thread._id', '').slice(0, 6)}`}
                    </Text>
                    {!genisis && <Text color={subTextColor}>...</Text>}
                    <Text
                      fontWeight={'regular'}
                      fontSize={'xs'}
                      color={subTextColor}
                      textDecorationColor={'blackAlpha.800'}
                      as={Link}
                      _hover={{
                        textDecoration: 'underline',
                      }}
                      to={`/thread/${get(post, '_id', '').slice(0, 6)}`}
                    >
                      {`${!genisis ? `#${get(post, '_id').slice(0, 6)}` : ''}`}
                      {/*
                      # {get( post, genisis ? "_id" : "thread._id", "").slice(0, 6) + !genisis && `...#${get(post, "_id").slice(0, 6)}`}
                      */}
                    </Text>
                    <Text
                      fontWeight={'regular'}
                      fontSize={'xs'}
                      color={theme.colors.lightgray}
                      mx={1}
                    >
                      {BULLET}
                    </Text>
                    <Text
                      fontWeight={'regular'}
                      fontSize={'xs'}
                      color={theme.colors.lightgray}
                    >
                      last bumped{' '}
                      {dayjs(
                        get(
                          post,
                          'bump.last',
                          new Date(new Date().getTime() - 10 * 60 * 60 * 1000)
                        )
                      ).fromNow()}
                    </Text>
                  </Box>
                  <Text fontWeight={'bold'}>{get(post, 'title', '')}</Text>
                  <ReactMarkdown
                    className={
                      expand ? 'react-markdown-full' : 'react-markdown-short'
                    }
                    components={renderers}
                    remarkPlugins={[remarkGfm, emoji]}
                    rehypePlugins={[rehypeRaw]}
                  >
                    {he.decode(get(post, 'content', ''))}
                  </ReactMarkdown>
                  {!genisis && (
                    <Box
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'flex-start'}
                      flexDirection={'row'}
                      mt={2}
                      color={subTextColor}
                      fontSize={['sm', 'sm', 'md']}
                      onClick={(e: MouseEvent<HTMLDivElement>): void => {
                        e.stopPropagation();
                        if (onPostClick) onPostClick();
                      }}
                      _hover={{
                        fontWeight: 'bold',
                      }}
                      cursor={'pointer'}
                    >
                      <Icon
                        pr={1}
                        as={trend > 0 ? BiTrendingUp : BiTrendingDown}
                        boxSize={[3, 4, 5]}
                      />
                      <Text pr={2}>{`${formatNumber(votes)}`}</Text>
                      <Text pr={2}>{`${BULLET}`}</Text>
                      <Icon as={BiComment} boxSize={[3, 4, 5]} pr={1} />
                      <Text>
                        {`${formatNumber(get(post, 'children', []).length)}`}
                      </Text>
                    </Box>
                  )}
                </Text>
                {showIcon && (
                  <IconButton
                    border={'2px solid black'}
                    rounded={'full'}
                    aria-label={'nothin'}
                    bg={'whiteAlpha.200'}
                    backdropFilter={'blur(2px)'}
                    position={'absolute'}
                    bottom={3}
                    right={5}
                    variant={'ghost'}
                    disabled={true}
                    onClick={(e: MouseEvent<HTMLButtonElement>): void => {
                      e.stopPropagation();
                      setExpand((old: boolean): boolean => !old);
                    }}
                    icon={
                      <Icon
                        boxSize={5}
                        as={expand ? BiChevronUpCircle : BiChevronDownCircle}
                      />
                    }
                  />
                )}
              </Box>
            )}
          </Box>
          {genisis && (
            <StatGroup
              as={Box}
              h={'full'}
              w={'full'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'space-evenly'}
              fontSize={['2xs', 'xs']}
            >
              <Box
                w={genisis ? '25%' : '33%'}
                h={'full'}
                display={'grid'}
                placeItems={'center'}
                borderTop={'2px solid black'}
              >
                <Box
                  h={'full'}
                  display={'grid'}
                  gridTemplateColumns={'48px auto'}
                  placeItems={'center'}
                >
                  <Icon
                    color={trend > 0 ? 'green' : 'red'}
                    as={trend > 0 ? BiTrendingUp : BiTrendingDown}
                    boxSize={[4, 5, 6]}
                  />
                  <Stat
                    h={'full'}
                    size={'xs'}
                    p={0}
                    m={0}
                    display={'grid'}
                    placeItems={'center'}
                  >
                    <StatLabel>Votes</StatLabel>
                    <StatNumber>{formatNumber(votes)}</StatNumber>
                  </Stat>
                </Box>
              </Box>
              <Box
                borderTop={'2px solid black'}
                h={'full'}
                w={genisis ? '25%' : '34%'}
                display={'grid'}
                placeItems={'center'}
                borderRight={'2px solid black'}
                borderLeft={'2px solid black'}
              >
                <Box
                  h={'full'}
                  display={'grid'}
                  gridTemplateColumns={'48px auto'}
                  placeItems={'center'}
                >
                  <Icon boxSize={[4, 5, 6]} as={BiComment} />
                  <Stat
                    display={'grid'}
                    placeItems={'center'}
                    h={'full'}
                    size={'xs'}
                    p={0}
                    m={0}
                  >
                    <StatLabel>Replies</StatLabel>
                    <StatNumber>
                      {formatNumber(get(post, 'children', []).length)}
                    </StatNumber>
                  </Stat>
                </Box>
              </Box>
              {genisis && (
                <Box
                  h={'full'}
                  w={'25%'}
                  display={'grid'}
                  placeItems={'center'}
                  borderTop={'2px solid black'}
                >
                  <Box
                    h={'full'}
                    display={'grid'}
                    gridTemplateColumns={'48px auto'}
                    placeItems={'center'}
                  >
                    <Icon as={FiEye} boxSize={[4, 5, 6]} />
                    <Stat
                      display={'grid'}
                      placeItems={'center'}
                      h={'full'}
                      size={'xs'}
                      p={0}
                      m={0}
                    >
                      <StatLabel>Views</StatLabel>
                      <StatNumber>{formatNumber(views)}</StatNumber>
                    </Stat>
                  </Box>
                </Box>
              )}
              <Button
                h={'full'}
                w={genisis ? '25%' : '33%'}
                cursor={'pointer'}
                borderTop={leftTopBorder}
                borderLeft={leftTopBorder}
                borderRight={rightBottomBorder}
                borderBottom={rightBottomBorder}
                color={color}
                onClick={(e: MouseEvent<HTMLDivElement>): void => {
                  e.stopPropagation();
                  const func: (...args: any[]) => any = genisis
                    ? onThreadClick
                    : onPostClick;

                  func();
                }}
                variant={'ghost'}
                rightIcon={<Icon as={BiArrowToRight} />}
                fontWeight={'semibold'}
                rounded={'none'}
              >
                view
              </Button>
            </StatGroup>
          )}
        </>
      )}
    </Box>
  );
};

export const PostError: FC = (): ReactElement => {
  const theme = useTheme<Interfaces.Theme>();

  return (
    <Box
      w={'full'}
      h={'24'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      flexDirection={'column'}
      borderRadius={'md'}
      borderColor={'black'}
      borderWidth={'thin'}
      shadow={'md'}
    >
      <Icon as={BiErrorAlt} boxSize={10} color={theme.colors.lightgray} />{' '}
    </Box>
  );
};
