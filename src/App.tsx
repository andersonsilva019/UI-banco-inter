import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import theme from './styles/theme';
import Header from './components/Header';
import Gradient from './components/Gradient';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Gradient />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
