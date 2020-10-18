import React from 'react';

import { useTheme } from 'styled-components';

import { Container } from './styles';
import { removeHashFromColor } from '../../../utils/removeHashFromColor';

interface IAccountDropdownProps {
  user: string | undefined;
}

const AccountDropdown: React.FC<IAccountDropdownProps> = ({ user }) => {
  const { lightGrey, secondary } = useTheme().colors;

  return (
    <Container>
      <img
        src={`https://ui-avatars.com/api/?rounded=true&bold=true&format=svg&background=${removeHashFromColor(
          lightGrey,
        )}&color=${removeHashFromColor(secondary)}&name=${user}`}
        alt=""
      />
    </Container>
  );
};

export default AccountDropdown;
