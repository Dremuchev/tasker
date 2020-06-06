import ListItem from '@material-ui/core/ListItem';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import React from 'react';
import styled from "styled-components";
import { INFO_HEADER_HEIGHT, PrimaryColors } from "../../../constants";
import { CustomListItemProps } from './mobile-tabs.types';


const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
    customTabsBar: {
        top: INFO_HEADER_HEIGHT,
        backgroundColor: 'transparent',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export const CustomListItem = withStyles((theme: Theme) =>
    createStyles({
        root: {
            color: PrimaryColors[600],
            '&:hover': {
                color: PrimaryColors[700],
                backgroundColor: PrimaryColors[100],
            },
        },
        selected: {
            '&&': {
                backgroundColor: PrimaryColors[50],
                '&:hover': {
                    color: PrimaryColors[700],
                    backgroundColor: PrimaryColors[100],
                },
            }
        },
    }),
)((props: CustomListItemProps) => <ListItem {...props} />);

export const BurgerHeaderWrapper = styled.div`
    display: flex;
`;
