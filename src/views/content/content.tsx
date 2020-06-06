import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { StyledMain } from './content.styles';
import { MainPage } from './main-page/main-page.component';

export const Content = () => {
    return (
        <StyledMain>
            <Switch>
                <Route exact path="/" component={MainPage} />
            </Switch>
        </StyledMain>
    );
};
