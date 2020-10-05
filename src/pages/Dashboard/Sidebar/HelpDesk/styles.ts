import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import { Container as ButtonContainer } from '../../../../components/Button/styles';

export const Container = styled.aside`
  ${({ theme }) => css`
    padding: 2rem 2.4rem;
    margin-top: 2.4rem;
    background: ${transparentize(0.92, theme.colors.grey)};
    border-radius: ${theme.radius.default};
    display: flex;
    align-items: center;

    > span {
      font-size: ${theme.fontSizes.small};
    }
  `}
`;

export const HelpButton = styled(ButtonContainer)`
  margin-left: auto;
  border-radius: 50%;
  flex-grow: 0;
  padding: 0.8rem;
`;
