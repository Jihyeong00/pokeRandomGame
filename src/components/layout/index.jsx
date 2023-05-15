import React from 'react';
import Footer from '../footer';
import Header from '../header';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import Loading from '../Loading/Loading';

const LayOut = () => {
  return (
    <React.Fragment>
      <Header />
      <Background />
      {/* <Loading /> */}
      <Container>
        <Outlet />
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default LayOut;

const Background = styled.div`
  z-index: 0;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: url('/assets/img/poke-background.jpg');
  object-position: center;
  background-size: cover;
  opacity: 0.3;
`;
const Container = styled.div`
  z-index: 100;
  position: relative;
  padding-top: 120px;
`;
