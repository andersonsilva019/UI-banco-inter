import React from 'react';

import { Container, Wrapper } from './styles';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const animation = {
  unMounted: { opacity: 0 },
  mounted: {
    opacity: 1,
    // transition: {
    //   when: 'beforeChildren',
    //   staggerChildren: 0.2,
    // },
  },
};

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper
          animate="mounted"
          initial="unMounted"
          variants={animation}
          transition={{ duration: 2 }}
        >
          <Sidebar />
          <MainContent />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
