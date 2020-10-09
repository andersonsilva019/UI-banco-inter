import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import { Container, Cards, Navigation } from './styles';

import { cardsNavigation } from '~/resources';
import Button from '~/components/Button';
import { DEFAULT_TRANSITION } from '~/constants';

const containerAnimation = {
  unMounted: { opacity: 0, y: -50 },
  mounted: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delay: 0.15,
      ...DEFAULT_TRANSITION,
    },
  },
};

const cardsAnimation = {
  unMounted: { opacity: 0, y: -30 },
  mounted: { opacity: 1, y: 0 },
};

const NavigationCards: React.FC = () => {
  return (
    <Container variants={containerAnimation}>
      <Navigation>
        {Object.entries(cardsNavigation).map(([key, value]) => (
          <Cards
            key={`card-${key}`}
            variants={cardsAnimation}
            transition={DEFAULT_TRANSITION}
            whileHover={{ y: -4 }}
            whileTap={{ y: 2 }}
          >
            <div>{value.icon}</div>
            {key}
          </Cards>
        ))}
      </Navigation>
      <Button>
        <FiArrowRight />
      </Button>
    </Container>
  );
};

export default NavigationCards;
