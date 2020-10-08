import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  max-height: 12rem;
  display: flex;

  > button:last-child {
    margin: 0 0 2.4rem 2.4rem;
    align-self: flex-end;
    background: ${({ theme }) => transparentize(0.92, theme.colors.grey)};
    border-radius: 50%;
    max-width: 4rem;
    max-height: 4rem;
    width: 100%;
    height: 100%;
    padding: 0;

    svg {
      width: auto;
      height: 2.4rem;
    }
  }
`;

export const Navigation = styled.nav`
  display: grid;
  grid-template-columns: repeat(6, minmax(10.4rem, 1fr));
  grid-gap: 0 0.8rem;
`;

export const Cards = styled(motion.div)`
  ${({ theme }) => css`
    max-width: 12rem;
    max-height: 12rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: ${theme.colors.background};
    color: ${theme.colors.grey};
    border-radius: ${theme.radius.default};
    padding: 1.6rem;
    box-shadow: ${theme.shadows.flat};
    font-size: ${theme.fontSizes.default};

    div {
      background: ${theme.colors.lightGrey};
      max-height: 6.4rem;
      max-width: 6.4rem;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    svg {
      /* flex-shrink: 0; */
      stroke: ${theme.colors.primary}; /* Mudando a cor do svg */
      stroke-width: 1.5;
      height: 100%;
      min-height: 2.4rem;
      width: auto;
    }
    :nth-child(2) {
      svg {
        stroke: none;
      }
    }
  `}
`;
