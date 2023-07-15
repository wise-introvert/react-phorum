/* eslint-disable react-hooks/rules-of-hooks */
import { ReactElement, FC, useRef, MutableRefObject, MouseEvent } from "react";
import {
  List,
  Avatar,
  ListItem,
  ListIcon,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  ColorModeContextType,
  useColorMode,
  IconButton,
  Box,
  Flex,
  Container,
  Text,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  useTheme,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiXCircle,
  FiChevronDown,
  FiSun,
  FiMoon,
  FiChevronRight,
  FiUser,
  FiBell,
  FiSearch,
} from "react-icons/fi";
import { FcHome, FcLineChart, FcBookmark, FcSearch } from "react-icons/fc";
import { Link as ReactRouterLink } from "react-router-dom";
import packageJSON from "../../../package.json";

import { Button } from "..";

export const Navbar: FC = (): ReactElement<HTMLDivElement> => {
  const { isOpen, onToggle } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onClose: onDrawerClose,
    onToggle: onDrawerToggle,
    onOpen: onDrawerOpen,
  } = useDisclosure();
  const theme = useTheme<Interfaces.Theme>();
  const { colorMode, toggleColorMode }: ColorModeContextType = useColorMode();
  const drawerButtonRef: MutableRefObject<HTMLButtonElement> = useRef<any>();
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");
  const textColor: string = useColorModeValue(
    theme.colors.black,
    theme.colors.white
  );

  return (
    <Box
      px={"5vw"}
      w={"full"}
      borderBottom={`2px solid ${useColorModeValue(
        theme.colors.black,
        "transparent"
      )}`}
      pos={"sticky"}
      top={0}
      zIndex={100}
      bg={useColorModeValue(theme.colors.white, theme.colors.darkgray)}
    >
      <Flex
        w={"full"}
        color={useColorModeValue(theme.colors.lightgray, theme.colors.white)}
        minH={"60px"}
        dir={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Flex
          w={"fit-content"}
          dir={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <IconButton
            onClick={onDrawerToggle}
            ref={drawerButtonRef}
            variant={"ghost"}
            icon={<Icon as={FiMenu} boxSize={5} />}
            aria-label={"menu"}
            mr={1}
          />
          <Text
            color={theme.colors.white}
            bg={theme.colors.black}
            fontWeight={"black"}
            borderRadius={"5px"}
            px={1}
            as={ReactRouterLink}
            to={`/`}
            transition={"all 200ms ease-in-out"}
            _hover={{
              bg: theme.colors.white,
              color: theme.colors.black,
            }}
            cursor={"pointer"}
            border={`2px solid ${useColorModeValue(
              theme.colors.black,
              theme.colors.white
            )}`}
            fontSize={"md"}
            fontFamily={"brand"}
          >
            SIF
          </Text>
        </Flex>
        <Flex
          w={"fit-content"}
          dir={"row"}
          alignItems={"center"}
          justifyContent={"flex-end"}
        >
          <IconButton
            variant={"ghost"}
            icon={<Icon as={FiSearch} boxSize={5} />}
            aria-label={"search"}
          />
          <IconButton
            mx={1}
            variant={"ghost"}
            icon={<Icon as={FiBell} boxSize={5} />}
            aria-label={"notifications"}
          />
          <IconButton
            mr={1}
            onClick={toggleColorMode}
            variant={"ghost"}
            aria-label={"toggle-color-mode"}
            icon={
              <Icon boxSize={5} as={colorMode === "dark" ? FiSun : FiMoon} />
            }
          />
          <IconButton
            variant={"ghost"}
            rounded={"full"}
            icon={
              <Avatar
                border={"2px solid black"}
                h={"28px"}
                maxW={"28px"}
                name={"Wise Introvert"} // TODO
                src={
                  "https://res.cloudinary.com/practicaldev/image/fetch/s--YSFcx0Iy--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/471724/b962f9e9-a782-488b-a261-fa1ba529e44f.jpeg"
                } // TODO
                onClick={(e: MouseEvent<HTMLSpanElement>): void => {
                  e.stopPropagation();
                  alert("user");
                }}
              />
            }
            aria-label={"profile"}
          />
        </Flex>
        {/* TODO: it's own component and polish the UI a bit */}
        <Drawer
          isOpen={isDrawerOpen}
          placement="left"
          onClose={onDrawerClose}
          finalFocusRef={drawerButtonRef}
        >
          <DrawerOverlay bg={"blackAlpha.200"} backdropFilter={"blur(8px)"} />
          <DrawerContent
            bg={useColorModeValue(theme.colors.white, theme.colors.black)}
            h={"full"}
            w="fit-content"
            zIndex={10000000000}
          >
            <DrawerCloseButton size={"sm"} />

            <DrawerHeader
              w={"75%"}
              color={textColor}
              fontWeight={"bold"}
              fontSize={"lg"}
            >
              Students International Forum
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing={3} p={0}>
                {[
                  { title: "Home", icon: FcHome },
                  { title: "Trending", icon: FcLineChart },
                  { title: "Saved", icon: FcBookmark },
                  { title: "Search", icon: FcSearch },
                ].map(
                  (item: Record<string, any>): ReactElement<HTMLLIElement> => (
                    <Button
                      px={2}
                      bg={"transparent"}
                      _hover={{
                        bg: useColorModeValue(
                          theme.colors.lightergray,
                          theme.colors.darkgray
                        ),
                      }}
                      w="full"
                      border={"unset"}
                      color={useColorModeValue(
                        theme.colors.black,
                        theme.colors.white
                      )}
                      alignItems={"center"}
                      justifyContent={"flex-start"}
                      variant={"ghost"}
                      aria-label={item}
                      leftIcon={<Icon boxSize={6} as={item.icon} />}
                    >
                      {item.title}
                    </Button>
                  )
                )}
              </Stack>
            </DrawerBody>

            <DrawerFooter>
              <Text fontSize={"2xs"} color={theme.colors.lightgray}>
                v{packageJSON.version}
              </Text>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                as={ReactRouterLink}
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      as={ReactRouterLink}
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={FiChevronRight} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={FiChevronDown}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={2}
          borderStyle={"solid"}
          borderColor={useColorModeValue("black", "white")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link
                key={child.label}
                py={2}
                href={child.href}
                as={ReactRouterLink}
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Hello",
    href: "/path/not",
  },
];
/* eslint-disable react-hooks/rules-of-hooks */
