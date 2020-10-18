import React from 'react';

import { useTheme } from 'styled-components';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { Container } from './styles';

const AuthLayout: React.FC<{ background?: string }> = ({
  children,
  background,
}) => {
  const { colors } = useTheme();
  return (
    <Container
      animate={{ background }}
      transition={{ duration: 0.5 }}
      exit={{ background: colors.lightGrey }}
    >
      {children}
    </Container>
  );
};

export default AuthLayout;
