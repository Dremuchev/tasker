import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { StyledMain } from './content.styles';
import { MainPage } from './main-page/main-page.component';
import { isMobileScreen } from '../../constants';

export const Content = () => {
    return (
        <StyledMain isMobile={isMobileScreen}>
            <Switch>
                <Route exact path="/tasker" component={MainPage} />
            </Switch>
        </StyledMain>
    );
};
