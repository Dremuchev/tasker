import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './global-styles';
import { Content } from './views/content/content';
import { Header } from './views/header/header.component';
import { Container } from '@material-ui/core';

export const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Container>
                <Header />
                <Content />
            </Container>
        </BrowserRouter>
    );
};
