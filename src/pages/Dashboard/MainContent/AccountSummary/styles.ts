import styled, { css, DefaultTheme } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 0 2.4rem;
  margin: 2.4rem 0;
  max-height: 17.6rem;
  height: 100%;
`;

export const Card = styled(motion.div)`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    max-width: 26.4rem;
    width: 100%;
    height: 100%;
    border-radius: ${theme.radius.default};
    padding: 1.6rem 2.4rem;
    box-shadow: ${theme.shadows.default};
    display: flex;
    flex-direction: column;
  `}
`;

export const Header = styled.div<{ iconStroke?: boolean }>`
  ${({ theme, iconStroke }) => css`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 0.8rem;

    > svg {
      margin-right: 0.8rem;
      stroke: ${iconStroke && theme.colors.primary};
      width: auto;
      height: 1.6rem;
    }

    > h3 {
      font-weight: 500;
      color: ${theme.colors.darkGrey};
      font-size: ${theme.fontSizes.small};
    }

    > button {
      margin: -0.8rem -1.6rem 0 auto;
      padding: 0.8rem 1.6rem;
      svg {
        stroke-width: 1.5;
        stroke: ${theme.colors.grey};
      }
    }
  `}
`;

export const DataWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: auto;
  flex: 1;
`;

export const LeftData = styled.div`
  ${({ theme }) => css`
    max-width: 55%;
    margin-right: 0.8rem;
    width: 100%;
    max-height: 9.6rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      height: 8.4rem;
      width: auto;
    }

    /* Texto do gráfico */
    svg text {
      font-size: ${theme.fontSizes.tiny} !important;
      fill: ${theme.colors.grey} !important;
    }
  `}
`;

export const RightData = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.small};
    > span:not(:only-child):last-of-type {
      margin-top: 0.8rem;
      display: block;
    }
  `}
`;

interface IGetDataColor {
  theme: DefaultTheme;
  income?: boolean;
  outcome?: boolean;
}

const getDataColor = ({ theme, income, outcome }: IGetDataColor): string => {
  if (income) {
    return theme.colors.success;
  }
  if (outcome) {
    return theme.colors.error;
  }

  return theme.colors.darkGrey;
};

export const DataValue = styled.div<Omit<IGetDataColor, 'theme'>>`
  ${({ theme, income, outcome }) => css`
    color: ${getDataColor({ theme, income, outcome })};
  `}
`;

export const CustomTooltip = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGrey};
    padding: 0.4rem 0.8rem;
    border-radius: ${theme.radius.small};
    font-size: ${theme.fontSizes.tiny};
    text-align: center;
    box-shadow: 0 -0.1rem 0.1rem rgba(0, 0, 0, 0.28);

    :before {
      bottom: -1.6rem;
      content: '';
      display: block;
      height: 0;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      border-color: ${theme.colors.lightGrey} transparent transparent
        transparent;
      border-style: solid;
      border-width: 0.8rem;
    }
  `}
`;
