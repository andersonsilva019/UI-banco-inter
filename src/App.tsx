import React from 'react';

import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import GlobalStyles from './styles/global';
import theme from './styles/theme';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
        <Dashboard />
      </AnimatePresence>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
