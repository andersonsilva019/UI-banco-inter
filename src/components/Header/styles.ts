import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 10.4rem;
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
