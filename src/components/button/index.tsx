import { FC, ReactElement } from 'react';
import { Button as ChakraButton, useTheme } from '@chakra-ui/react';

type ButtonProps = any;
export const Button: FC<ButtonProps> = ({
  children,
  ...rest
}: ButtonProps): ReactElement<HTMLButtonElement> => {
  const theme = useTheme<Interfaces.Theme>();

  return (
    <ChakraButton
      fontWeight={'semibold'}
      borderRadius={'5px'}
      border={`2px solid ${theme.colors.primary}`}
      color={theme.colors.primary}
      // color={theme.colors.white}
      _hover={{
        bg: theme.colors.primary,
        color: theme.colors.black,
        border: '2px solid black',
      }}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};
