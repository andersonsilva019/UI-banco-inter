import styled, { css } from 'styled-components';

interface IPropsContainer {
  variant?: 'secondary' | 'transparent';
  color?: string;
  background?: string;
}

const variants = {
  secondary: css`
    background: transparent;
    border: 0.1rem solid ${({ theme }) => theme.colors.secondary};
  `,
  transparent: css`
    background: transparent;
  `,
};

export const Container = styled.button<IPropsContainer>`
  ${({ theme, variant, color, background }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 2.4rem;
    border-radius: 0.4rem;
    border: 0;
    background: ${background || theme.colors.background};
    color: ${color || theme.colors.secondary};
    transition: ${theme.transition.default};
    ${variant && variants[variant]}; /* variants.secondary */

    /* &:hover {
      transform: scale(1.5);
    } */
  `}
`;
