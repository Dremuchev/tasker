import { Divider, Drawer, IconButton, List, ListItemText, Toolbar, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { HistoryActions } from '../../../constants';
import { Tabs } from '../header-tabs/header-tabs.types';
import { BurgerHeaderWrapper, CustomListItem, useStyles } from './mobile-tabs.styles';
import { CONFIG } from '../../../configuration';

export interface HeaderTabsProps {
    tabs?: Tabs[];
}

export const MobileTabs = withRouter(({ history, location, tabs }: RouteComponentProps & HeaderTabsProps) => {
    const [value, setValue] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const styles = useStyles();

    const initiateTab = useCallback(() => {
        if (tabs && history.action === HistoryActions.POP) {
            const findedTab = tabs.find((tab: Tabs) => tab.link === location.pathname);
            if (findedTab) {
                setValue(findedTab.id);
            }
            if (location.pathname === '/') {
                setValue(0);
            }
        }
    }, [location, tabs, history, value]);

    useEffect(() => {
        initiateTab();
    }, [location, tabs, history, value]);

    const appBarClassName = useMemo(
        () =>
            clsx(styles.appBar, {
                [styles.appBarShift]: isOpen,
            }),
        [isOpen],
    );

    const burgerIconClassName = useMemo(() => clsx(styles.menuButton, isOpen && styles.hide), [isOpen]);

    const handleDrawerAction = useCallback(() => setIsOpen(!isOpen), [isOpen]);

    const handleItemSelect = useCallback(
        (selectedId: number) => () => {
            setValue(selectedId);
        },
        [],
    );

    return (
        <BurgerHeaderWrapper>
            <AppBar position="fixed" className={appBarClassName} color="default" elevation={0}>
                <Toolbar>
                    <IconButton
                        disableRipple
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerAction}
                        edge="start"
                        className={burgerIconClassName}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        {CONFIG.APP_NAME}
                    </Typography>
                </Toolbar>
                <Drawer
                    className={styles.drawer}
                    open={isOpen}
                    onClose={handleDrawerAction}
                    classes={{
                        paper: styles.drawerPaper,
                    }}
                >
                    <div className={styles.drawerHeader}>
                        <IconButton disableRipple onClick={handleDrawerAction}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {tabs?.map(({ id, title, link }) => (
                            <CustomListItem
                                component={Link}
                                key={id}
                                selected={id === value}
                                to={link}
                                onClick={handleItemSelect(id)}
                            >
                                <ListItemText primary={title} primaryTypographyProps={{ variant: 'subtitle2' }} />
                            </CustomListItem>
                        ))}
                    </List>
                </Drawer>
            </AppBar>
        </BurgerHeaderWrapper>
    );
});
