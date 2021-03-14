import { Typography } from '@material-ui/core';
import React from 'react';
import { CONFIG } from '../../../configuration';
import { TaskManager } from '../../../modules/task-manager/task-manager.component';
import { FlexGrid } from './main-page.styles';

export const MainPage = () => {
    return (
        <>
            <Typography variant="h4" variantMapping={{ h4: 'h1' }} align="center">
                {CONFIG.APP_HEADER}
            </Typography>
            <FlexGrid>
                <TaskManager />
            </FlexGrid>
        </>
    );
};
