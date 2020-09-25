import React from 'react';

import {
  FiBarChart2,
  FiCreditCard,
  FiGift,
  FiUmbrella,
  FiRepeat,
} from 'react-icons/fi';

import { BoletoIcon } from '../assets/icons';

export default {
  Transferência: {
    icon: <FiRepeat />,
  },

  Pagamentos: {
    icon: <BoletoIcon />,
  },

  Investimentos: {
    icon: <FiBarChart2 />,
  },

  Cartões: {
    icon: <FiCreditCard />,
  },

  'Gitf Card': {
    icon: <FiGift />,
  },

  Seguros: {
    icon: <FiUmbrella />,
  },
} as const;
