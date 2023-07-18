import { FC, ReactElement } from 'react';
import { Button as ChakraButton, useTheme } from '@chakra-ui/react';

type ButtonProps = any;
export const Button: FC<ButtonProps> = ({
  children,
  ...rest
}: ButtonProps): ReactElement<HTMLButtonElement> => {
  const theme = useTheme<Interfaces.Theme>();

  return <ChakraButton {...rest}>{children}</ChakraButton>;
};
