import { Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React from 'react';
import styled from 'styled-components';
import { HEADER_TABS_HEIGHT, INFO_HEADER_HEIGHT, Orange, PrimaryColors } from '../../../constants';
import { CustomTabProps, CustomTabsProps } from './header-tabs.types';

export const useTabsStyles = makeStyles(theme => ({
    customTabsBar: {
        top: INFO_HEADER_HEIGHT,
        backgroundColor: 'transparent',
    },
    toolbar: {
        '&&': {
            minHeight: HEADER_TABS_HEIGHT,
        },
    },
    logoText: {
        '&&': {
            color: Orange[600],
            marginRight: 12,
            marginLeft: 6,
        },
    },
    logoIcon: {
        color: Orange[600],
    },
}));

export const CustomTabs = withStyles((theme: Theme) =>
    createStyles({
        root: {
            minHeight: HEADER_TABS_HEIGHT,
            width: 'calc(100vw - 17px)',
        },
        indicator: {
            backgroundColor: Orange[500],
        },
    }),
)((props: CustomTabsProps) => <Tabs {...props} />);

export const CustomTab = withStyles((theme: Theme) =>
    createStyles({
        root: {
            whiteSpace: 'nowrap',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '0.85rem',
            color: PrimaryColors[600],
            minHeight: HEADER_TABS_HEIGHT,
            '&:focus, &:hover': {
                color: PrimaryColors[700],
            },
            '&:active': {
                color: PrimaryColors[800],
            },
        },
    }),
)((props: CustomTabProps) => <Tab {...props} />);

export const LogoTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: ${Orange[700]};
    margin: 0 12px 6px 12px;
`;

export const TypographyWrapper = styled<any>(Typography)`
    color: ${Orange[600]};
    text-decoration: none;
    padding-left: 12px;
`;
