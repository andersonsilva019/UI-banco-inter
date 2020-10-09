import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { Container, Balance } from './styles';
import BalanceSecrets from './BalanceSecrets';

import Button from '~/components/Button';

const AccountBalance: React.FC = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [isValueVisible, setIsVisible] = useState(false);

  return (
    <Container>
      <Balance>
        <span>Saldo em conta:</span>
        <AnimatePresence>
          {isHidden && <BalanceSecrets setIsValueVisible={setIsVisible} />}
        </AnimatePresence>
        <div>
          R$ <strong>{isValueVisible ? '1234,00' : '---'}</strong>
        </div>
      </Balance>
      <Button
        revision="transparent"
        onClick={() => setIsHidden(prevState => !prevState)}
      >
        {isHidden ? <FiEyeOff /> : <FiEye />}
      </Button>
    </Container>
  );
};

export default AccountBalance;
