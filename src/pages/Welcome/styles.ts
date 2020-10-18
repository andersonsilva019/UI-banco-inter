import styled, { css } from 'styled-components';
import { transparentize, lighten } from 'polished';
import { motion } from 'framer-motion';

import Button from '../../components/Button';

export const Container = styled(motion.main)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.background};
    box-shadow: ${theme.shadows.default};
    border-radius: ${theme.radius.default};
    padding: 3.2rem;

    width: 100%;
    height: 100%;
    max-width: 40rem;
    max-height: 36rem;

    h1 svg {
      width: 12rem !important;
      height: auto !important;
    }

    h2 {
      font-size: ${theme.fontSizes.large};
      text-align: center;
      font-weight: 500;
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2.4rem;
    width: 100%;

    label {
      width: 100%;
      input {
        width: 100%;
        padding: 0.8rem 1.2rem;
        border: 0;
        border-radius: ${theme.radius.small};
        box-shadow: ${theme.shadows.flat};
        background: ${transparentize(0.92, theme.colors.grey)};
        color: ${theme.colors.darkGrey};

        ::placeholder {
          opacity: 0.4;
        }
      }
    }
  `}
`;

export const SignInButton = styled(Button)`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.background};
    margin-top: 1.2rem;
    background: ${`linear-gradient(90deg, ${theme.colors.secondary} 0%, ${theme.colors.primary} 100%);`};
    transition: 300ms ease-in-out;

    /* :disabled {
      background: ${`linear-gradient(90deg, ${theme.colors.secondary} 0%, ${theme.colors.primary} 100%);`};
    } */

    :not(:disabled):before {
      border-radius: inherit;
      background: ${theme.colors.primary};
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      width: 100%;
      z-index: -1;
      transition: opacity 0.45s;
      pointer-events: none;
    }

    :hover:not(:disabled) {
      background: ${`linear-gradient(90deg, ${lighten(
        0.04,
        theme.colors.secondary,
      )} 0%, ${lighten(0.04, theme.colors.primary)} 100%);`};
      :before {
        opacity: 1;
      }
    }

    :active:before {
      opacity: 0;
    }
  `}
`;
