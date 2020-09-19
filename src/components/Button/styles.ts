import styled, { css } from 'styled-components';

interface IPropsContainer {
  variant?: 'secondary' | 'transparent';
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 2.4rem;
  border-radius: 0.4rem;
  border: 0;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};

  ${({ variant }) => variant && variants[variant]}; /* variants.secondary */
`;
