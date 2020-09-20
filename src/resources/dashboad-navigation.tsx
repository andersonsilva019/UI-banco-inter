import React from 'react';

import {
  BarChartIcon,
  ClockIcoIcon,
  DolarIcon,
  SecurityIcon,
  SmartphoneIcon,
  UmbrellaIcon,
} from '../assets/icons';

export default {
  'Conta digital': {
    icon: <SmartphoneIcon />,
  },
  Crédito: {
    icon: <DolarIcon />,
  },
  Investimentos: {
    icon: <BarChartIcon />,
  },
  IDTVM: {
    icon: <ClockIcoIcon />,
  },
  Seguros: {
    icon: <UmbrellaIcon />,
  },
  'Recarga de celular': {
    icon: <SmartphoneIcon />,
  },
  'Sua Segurança': {
    icon: <SecurityIcon />,
  },
} as const;
