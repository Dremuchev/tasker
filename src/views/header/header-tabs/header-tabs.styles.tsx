import { Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React from 'react';
import styled from 'styled-components';
import { HEADER_TABS_HEIGHT, INFO_HEADER_HEIGHT, Orange, PrimaryColors } from '../../../constants';
import { CustomTabProps, CustomTabsProps } from './header-tabs.types';

const HEADER_WIDTH = 'calc(100vw - 17px)';

export const useTabsStyles = makeStyles(theme => ({
    customTabsBar: {
        top: INFO_HEADER_HEIGHT,
        backgroundColor: 'transparent',
    },
    toolbar: {
        '&&': {
            minHeight: HEADER_TABS_HEIGHT,
            justifyContent: 'flex-end',
            width: HEADER_WIDTH,
            padding: 0,
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
        paddingRight: 4,
    },
}));

export const CustomTabs = withStyles((theme: Theme) =>
    createStyles({
        root: {
            minHeight: HEADER_TABS_HEIGHT,
            width: HEADER_WIDTH,
        },
        indicator: {
            backgroundColor: 'transparent',
        },
        flexContainer: {
            justifyContent: 'flex-end',
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
            color: Orange[500],
            minHeight: HEADER_TABS_HEIGHT,
            minWidth: 'auto',
            '&:focus, &:hover': {
                color: Orange[700],
            },
            '&:active': {
                color: Orange[800],
            },
        },
        selected: {
            color: Orange[600],
            '&:focus, &:hover': {
                color: Orange[700],
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

export const TypographyWrapper = styled<any>(Typography)<{ noIndent: boolean; color: string }>`
    color: ${Orange[600]};
    text-decoration: none;
    padding-right: ${({ noIndent }) => (Boolean(noIndent) ? '0' : '12px')};
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const Location = styled.div`
    width: ${HEADER_WIDTH};
`;
