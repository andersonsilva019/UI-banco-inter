import React from 'react';

import { useTheme } from 'styled-components';

import { Container } from './styles';
import { removeHashFromColor } from '../../../utils/removeHashFromColor';

interface User {
  name: string;
}

interface IAccountDropdownProps {
  user: User;
}

const AccountDropdown: React.FC<IAccountDropdownProps> = ({ user }) => {
  const { lightGrey, secondary } = useTheme().colors;

  return (
    <Container>
      <img
        src={`https://ui-avatars.com/api/?rounded=true&bold=true&format=svg&background=${removeHashFromColor(
          lightGrey,
        )}&color=${removeHashFromColor(secondary)}&name=${user.name}`}
        alt=""
      />
    </Container>
  );
};

export default AccountDropdown;
