import { FC, ReactElement } from "react";
import {
  Button as ChakraButton,
  useTheme,
  useColorModeValue,
} from "@chakra-ui/react";

type ButtonProps = any;
export const Button: FC<ButtonProps> = ({
  children,
  ...rest
}: ButtonProps): ReactElement<HTMLButtonElement> => {
  const theme = useTheme<Interfaces.Theme>();

  return (
    <ChakraButton
      fontWeight={"semibold"}
      bg={useColorModeValue(theme.colors.black, theme.colors.darkgray)}
      border={useColorModeValue(theme.colors.black, "none")}
      borderRadius={"5px"}
      color={theme.colors.white}
      _hover={{
        bg: theme.colors.primary,
        color: theme.colors.black,
      }}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};
