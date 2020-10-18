import React from 'react';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';
import theme from './styles/theme';
import Routes from './routes';
import { AuthProvider } from './contexts/Auth';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
