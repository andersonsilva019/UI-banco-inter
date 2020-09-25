import React from 'react';

import {
  FiBarChart2,
  FiDollarSign,
  FiPieChart,
  FiUmbrella,
  FiSmartphone,
  FiShield,
} from 'react-icons/fi';

export default {
  'Conta digital': {
    icon: <FiSmartphone />,
  },
  Crédito: {
    icon: <FiDollarSign />,
  },
  Investimentos: {
    icon: <FiBarChart2 />,
  },
  IDTVM: {
    icon: <FiPieChart />,
  },
  Seguros: {
    icon: <FiUmbrella />,
  },
  'Recarga de celular': {
    icon: <FiSmartphone />,
  },
  'Sua Segurança': {
    icon: <FiShield />,
  },
} as const;
