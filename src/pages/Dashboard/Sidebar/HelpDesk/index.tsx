import React from 'react';

import { FiImage, FiArrowRight } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import { Container, HelpButton } from './styles';
import { DEFAULT_TRANSITION } from '../../../../constants';

const animation = {
  unMounted: { x: -50, opacity: 0 },
  mounted: {
    x: 0,
    opacity: 1,
    transition: { delay: 1, ...DEFAULT_TRANSITION },
  },
};

const HelpDesk: React.FC = () => {
  const { colors } = useTheme();
  return (
    <Container variants={animation}>
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
