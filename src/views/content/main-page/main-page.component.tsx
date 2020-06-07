import { Typography, Grid } from '@material-ui/core';
import React from 'react';
import { Badge } from './badge/badge.component';
import { FlexGrid } from './main-page.styles';

const toProdSrc = "assets/opel_car.jpg";

export const MainPage = () => {
    return (
        <>
            <Typography variant="h4" variantMapping={{h4: 'h1'}} align="center">Квалифицированная техническая помощь, сервис Opel</Typography>
            <FlexGrid>
                <Grid container alignItems="stretch" spacing={1}>
                    <Grid item xs={7}>
                        <img src="https://opel-center.ru/images/opel/opel_car.jpg" width="100%"/>
                    </Grid>
                    <Grid item xs>
                        <Badge />
                    </Grid>
                </Grid>
            </FlexGrid>
        </>
    );
};
