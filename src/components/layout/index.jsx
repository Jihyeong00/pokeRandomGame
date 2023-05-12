import React from 'react';
import Footer from '../footer';
import Header from '../header';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

const LayOut = () => {
    return (
        <React.Fragment>
            <Background/>
            <Container>
            <Header />
            <Outlet/>
            <Footer />
            </Container>
        </React.Fragment>
    );
};

export default LayOut;

const Background = styled.div`
    z-index: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    background-image: url('/assets/background/poke-background.jpg');
    opacity: 0.3;
`
const Container = styled.div`
    z-index: 100;
    position: relative;
`