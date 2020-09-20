import styled, { css } from 'styled-components';

import { Container as Button } from '../../../../components/Button/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGrey};
    width: 100%;
    height: 7.2rem;
    padding: 1.6rem 0 1.6rem 2.4rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: ${theme.radius.small};

    > span {
      font-size: ${theme.fontSizes.small};
    }

    svg {
      stroke-width: 2;
    }

    ${Button} {
      svg {
        transition: ${theme.transition.default};
      }
      :hover {
        svg {
          transform: scale(1.02);
          stroke-width: 2.5;
        }
      }
    }
  `}
`;

export const Balance = styled.div`
  ${({ theme }) => css`
    flex: 1;
    position: relative;
    > span {
      font-size: ${theme.fontSizes.small};
      display: block;

      :last-child {
        max-width: 8rem;
        margin: 0.2rem 0;
        height: 2rem;
        background: ${theme.colors.grey}b3; /* b3 = Opacidade */
        border-radius: ${theme.radius.tiny};
      }
    }
    > div {
      position: relative;
      z-index: 0;
    }
    strong {
      color: ${theme.colors.darkGrey};
      margin-left: 0.4rem;
    }
  `}
`;
