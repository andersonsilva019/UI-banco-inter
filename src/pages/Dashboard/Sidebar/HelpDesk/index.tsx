import React from 'react';

import { FiImage, FiArrowRight } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import { Container, HelpButton } from './styles';

const HelpDesk: React.FC = () => {
  const { colors } = useTheme();
  return (
    <Container>
      <FiImage />
      <span>
        Olá, Anderson Silva <br /> Posso ajudar ?
      </span>
      <HelpButton background={colors.background}>
        <FiArrowRight />
      </HelpButton>
    </Container>
  );
};

export default HelpDesk;
