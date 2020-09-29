import styled, { css, DefaultTheme } from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 0 2.4rem;
  margin: 2.4rem 0;
  max-height: 17.6rem;
  height: 100%;
`;

export const Card = styled.div`
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
    margin-right: 0.8rem;
    max-width: 55%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      height: 8.4rem;
      width: auto;
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
