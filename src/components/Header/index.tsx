import React, { memo } from 'react';

import { Container, Wrapper, LeftNav, RightNav } from './styles';
import { BancoInterLogo } from '../../assets/images';
import Button from '../Button';
import AccountDropdown from './AccountDropdown';
import Gradient from './Gradient';
import { DEFAULT_TRANSITION } from '../../constants';

interface User {
  id: number;
  name: string;
  username: string;
}

const containerAnimation = {
  unMounted: {},
  mounted: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const navNavigation = {
  unMounted: { y: -20, opacity: 0 },
  mounted: {
    y: 0,
    opacity: 1,
    transition: {
      ...DEFAULT_TRANSITION,
    },
  },
};

const Header: React.FC = () => {
  const user: User = { id: 1, name: 'Anderson Silva', username: 'And321' };
  return (
    <Container>
      <Wrapper
        variants={containerAnimation}
        initial="unMounted"
        animate="mounted"
      >
        <LeftNav variants={navNavigation}>
          <BancoInterLogo />
          Internet Backing
        </LeftNav>
        <RightNav variants={navNavigation}>
          <Button revision="secondary">Simular renda fixa</Button>
          <AccountDropdown user={user} />
        </RightNav>
      </Wrapper>
      <Gradient />
    </Container>
  );
};

export default memo(Header);
