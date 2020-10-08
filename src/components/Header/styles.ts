import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled(motion.div)`
  width: 100%;
  height: 10.4rem;
  max-width: 113rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LeftNav = styled(motion.div)`
  display: flex;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSizes.large}; /* 16px */
  font-weight: 700;

  > svg {
    margin: 0 2.4rem 0.8rem 0;
    height: 100%;
    max-width: 11.2rem;
  }
`;

export const RightNav = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;
