import React, { memo } from 'react';

import { Container, Wrapper, LeftNav, RightNav } from './styles';
import { BancoInterLogo } from '../../assets/images';
import Button from '../Button';
import AccountDropdown from './AccountDropdown';
import Gradient from './Gradient';

interface User {
  id: number;
  name: string;
  username: string;
}

// interface IHeaderProps {
//   user: User;
// }

const Header: React.FC = () => {
  const user: User = { id: 1, name: 'Anderson Silva', username: 'And321' };
  return (
    <Container>
      <Wrapper>
        <LeftNav>
          <BancoInterLogo />
          Internet Backing
        </LeftNav>
        <RightNav>
          <Button variant="secondary">Simular renda fixa</Button>
          <AccountDropdown user={user} />
        </RightNav>
      </Wrapper>
      <Gradient />
    </Container>
  );
};

export default memo(Header);
