import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import { Wrapper as HeaderWrapper } from '../Header/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const Wrapper = styled(HeaderWrapper)`
  ${({ theme }) => css`
    height: auto;
    padding: 1.6rem 0;
    align-items: center;

    span {
      display: block;
      font-size: ${theme.fontSizes.small};

      :first-of-type {
        margin-bottom: 0.8rem;
      }
    }
    > h4 {
      color: ${theme.colors.secondary};
      font-size: ${theme.fontSizes.default};
    }

    > img {
      margin-top: 1.6rem;
    }
  `}
`;

export const FooterSection = styled(Container)<{ background?: string }>`
  ${({ theme, background }) => css`
    background: ${background || transparentize(0.92, theme.colors.grey)};
    display: flex;

    :last-of-type {
      ${Wrapper} {
        padding: 2.4rem 0;
      }
    }
  `}
`;
