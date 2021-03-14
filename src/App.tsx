import { Container } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import FavIcon from './assets/favicon.ico';
import { GlobalStyles } from './global-styles';
import { Content } from './views/content/content';

export const App = () => {
    return (
        <BrowserRouter>
            <Helmet>
                <link rel="shortcut icon" href={FavIcon} type="image/x-icon" sizes="16x16" />
            </Helmet>
            <GlobalStyles />
            <Container>
                <Content />
            </Container>
        </BrowserRouter>
    );
};
