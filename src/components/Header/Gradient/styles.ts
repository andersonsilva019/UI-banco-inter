import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 100%;
  height: 6.4rem;
  align-self: flex-start;
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.colors.secondary} 0%, ${theme.colors.primary} 100%);`};
`;
