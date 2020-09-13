import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import theme from './styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hello</h1>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
