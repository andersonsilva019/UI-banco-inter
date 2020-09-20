import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

export type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'secondary' | 'transparent';
};

const Button: React.FC<IButtonProps> = ({
  children,
  type,
  variant,
  ...rest
}) => {
  return (
    <Container type={type || 'button'} {...rest} variant={variant}>
      {children}
    </Container>
  );
};

export default Button;
