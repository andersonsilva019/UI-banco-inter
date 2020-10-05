import React from 'react';

import Header from '../../components/Header';
import { Container, Wrapper } from './styles';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Footer from '../../components/Footer';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Sidebar />
          <MainContent />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
