import { ReactElement, FC } from "react";
import {
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
} from "@chakra-ui/react";
import {
  FiMenu,
  FiXCircle,
  FiChevronDown,
  FiSun,
  FiMoon,
  FiChevronRight,
} from "react-icons/fi";
import { Link as ReactRouterLink } from "react-router-dom";

import { Button } from "..";

export const Navbar: FC = (): ReactElement<HTMLDivElement> => {
  const { isOpen, onToggle } = useDisclosure();
  const theme = useTheme<Interfaces.Theme>();
  const { colorMode, toggleColorMode }: ColorModeContextType = useColorMode();

  return (
    <Box
      px={"4vw"}
      w={"full"}
      borderBottom={`2px solid ${useColorModeValue(
        theme.colors.black,
        "transparent"
      )}`}
      pos={"sticky"}
      top={0}
      zIndex={1021091902109}
      bg={useColorModeValue(theme.colors.white, theme.colors.darkgray)}
    >
      <Flex
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            _active={{}}
            _focus={{}}
            _hover={{}}
            variant={"ghost"}
            onClick={onToggle}
            icon={<Icon boxSize={6} as={isOpen ? FiXCircle : FiMenu} />}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={["center", "left"]}
            color={useColorModeValue("gray.800", "white")}
            fontWeight={"black"}
          >
            SIF
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <IconButton
            _active={{}}
            _hover={{}}
            _focus={{}}
            variant="ghost"
            aria-label={"toggle-color-mode"}
            onClick={toggleColorMode}
            fontSize={"sm"}
            icon={<Icon as={colorMode == "dark" ? FiSun : FiMoon} />}
          >
            Sign In
          </IconButton>
          <Button
            border={"2px solid black"}
            fontSize={"sm"}
            variant={"ghost"}
            as={ReactRouterLink}
            to={"#"}
          >
            Sign In
          </Button>
          <Button
            border={"2px solid black"}
            as={ReactRouterLink}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            to={"#"}
            variant={"ghost"}
          >
            Sign Up
          </Button>
        </Stack>
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
