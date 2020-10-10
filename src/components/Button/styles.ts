import styled, { css } from 'styled-components';

interface IPropsContainer {
  revision?: 'secondary' | 'transparent';
  color?: string;
  background?: string;
}

const revisions = {
  secondary: css`
    background: transparent;
    border: 0.1rem solid ${({ theme }) => theme.colors.secondary};
  `,
  transparent: css`
    background: transparent;
  `,
};

export const Container = styled.button<IPropsContainer>`
  ${({ theme, revision, color, background }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 2.4rem;
    border-radius: 0.4rem;
    border: 0;
    background: ${background || theme.colors.background};
    color: ${color || theme.colors.secondary};
    ${revision && revisions[revision]}; /* revisions.secondary */

    * {
      transition: ${theme.transition.default};
    }

    :disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  `}
`;
