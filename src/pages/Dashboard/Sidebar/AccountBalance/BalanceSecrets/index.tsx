import React, { Dispatch, SetStateAction, useEffect } from 'react';

import styled, { css } from 'styled-components';
import { motion, usePresence } from 'framer-motion';

interface IBalanceSecretsProps {
  setIsValueVisible: Dispatch<SetStateAction<boolean>>;
}

const showSecrets = {
  visible: { width: '100%' },
  hidden: { width: '0%' },
};

const BalanceSecrets: React.FC<IBalanceSecretsProps> = ({
  setIsValueVisible,
}) => {
  const [isPresent] = usePresence();

  useEffect(() => {
    setTimeout(() => setIsValueVisible(!isPresent), isPresent ? 120 : 0);
  }, [isPresent, setIsValueVisible]);
  return (
    <AnimatedContainer
      layout
      key="balance-secret"
      variants={showSecrets}
      initial={false}
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    />
  );
};

export default BalanceSecrets;

const AnimatedContainer = styled(motion.span)`
  ${({ theme }) => css`
    max-width: 10rem;
    margin: 0.2rem 0;
    height: 2rem;
    background: ${theme.colors.greyLowerOpacity}; /* b3 = Opacidade */
    border-radius: ${theme.radius.tiny};
    position: absolute;
    z-index: 2;
  `}
`;
