import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 10.4rem;
  display: flex;
  background: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 100rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LeftNav = styled.div`
  display: flex;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSizes.large}; /* 16px */
  font-weight: 700;

  > svg {
    margin-right: 2.4rem;
  }
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;
