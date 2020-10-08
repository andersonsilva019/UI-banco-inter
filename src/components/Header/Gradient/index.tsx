import React, { memo } from 'react';

import { useCycle } from 'framer-motion';
import { useTheme } from 'styled-components';

import { Container } from './styles';

const animation = {
  unMounted: { width: '0%' },
  mounted: {
    width: '100%',
    transition: {
      delay: 1,
      duration: 2.5,
      ease: 'easeInOut',
    },
  },
};

const Gradient: React.FC = () => {
  const { colors } = useTheme();
  const [backgroud, cycleBackground] = useCycle(
    {
      backgroudColor: `linear-gradient(90deg, ${colors.secondary} 0%, ${colors.primary} 0%);`,
    },
    {
      backgroudColor: `linear-gradient(90deg, ${colors.secondary} 0%, ${colors.primary} 100%);`,
    },
  );

  return (
    <Container
      layout
      variants={animation}
      initial="unMounted"
      animate="mounted"
    />
  );
};

export default memo(Gradient);
