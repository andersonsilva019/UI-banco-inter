import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${transparentize(0.92, theme.colors.grey)};
  `}
`;
