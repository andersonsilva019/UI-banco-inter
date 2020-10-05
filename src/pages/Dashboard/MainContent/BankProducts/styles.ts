import styled, { css } from 'styled-components';

import ButtonBackground from '../../../../assets/images/backgroundButton.svg';
import { Navigation, Cards } from '../NavigationCards/styles';
import { Container as ButtonContainer } from '../../../../components/Button/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    border-radius: ${theme.radius.default};
    box-shadow: ${theme.shadows.flat};
    padding: 2.4rem;
    max-height: 34.2rem;
    height: 100%;
    width: 100%;

    > div {
      display: flex;
      justify-content: space-between;

      + div {
        margin-top: 2.4rem;
        height: 100%;
      }
    }
  `}
`;
export const Products = styled(Navigation)`
  ${({ theme }) => css`
    flex-grow: 0;
    grid-template-columns: repeat(5, minmax(6.4rem, 1fr));
    margin: 0 -0.8rem 0 -0.8rem;
  `}
`;
export const ProductsCards = styled(Cards)`
  ${({ theme }) => css`
    box-shadow: none;
    background: none;
    font-size: ${theme.fontSizes.small};
    padding: 0;

    > div {
      svg {
        stroke: none;
      }
    }

    :nth-child(3) {
      margin: -0.4rem 0 0 -0.5rem;
    }
  `}
`;

export const ShoppingButton = styled(ButtonContainer)`
  ${({ theme }) => css`
    padding: 1.6rem 2.4rem;
    justify-content: space-between;
    max-width: 35.2rem;
    width: 100%;
    border-radius: ${theme.radius.default};
    flex: 1 0 100%;

    > div {
      color: ${theme.colors.grey};
      font-size: ${theme.fontSizes.small};
      text-align: left;
      max-width: 12rem;
      width: 100%;
      margin-left: -4rem;

      > h3 {
        color: ${theme.colors.darkGrey};
        font-size: ${theme.fontSizes.large};
      }
    }
  `}
`;

export const EquityButton = styled(ButtonContainer)`
  ${({ theme }) => css`
    padding: 1.6rem 2.4rem;
    max-width: 38.4rem;
    width: 100%;
    max-height: 18.4rem;
    height: 100%;
    color: ${theme.colors.yellow};
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: ${theme.radius.default};
    background: url(${ButtonBackground}), ${theme.colors.primaryDark} no-repeat;

    > h3 {
      font-size: ${theme.fontSizes.large};
    }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;

      > ul {
        color: ${theme.colors.background};

        li {
          display: flex;
          align-items: center;
        }

        svg {
          stroke-width: 1.5;
          margin-right: 0.8rem;
          flex-grow: 0;
        }
      }
      > button {
        font-size: ${theme.fontSizes.small};
        font-weight: 700;
        padding: 0.8rem 1.6rem;
      }
    }
  `}
`;

export const LoandButton = styled(EquityButton)`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    background-image: none;

    > h3 {
      text-align: left;
      max-width: 21.6rem;
      > span {
        font-weight: 300;
        font-size: ${theme.fontSizes}
        color: ${theme.colors.background};
      }
    }

    > div {
      > ul {
        li {
          span {
            max-width: 12rem;
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  `}
`;
