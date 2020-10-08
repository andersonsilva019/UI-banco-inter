import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

export type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  revision?: 'secondary' | 'transparent';
  background?: string;
  color?: string;
};

const Button: React.FC<IButtonProps> = ({
  children,
  type,
  revision,
  ...rest
}) => {
  return (
    <Container type={type || 'button'} {...rest} revision={revision}>
      {children}
    </Container>
  );
};

export default Button;
