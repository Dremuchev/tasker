import { SvgIcon, Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import EcoIcon from '@material-ui/icons/Eco';
import React, { useCallback, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { HistoryActions } from '../../../constants';
import { CustomTab, CustomTabs, TypographyWrapper, Location, useTabsStyles } from './header-tabs.styles';
import { Tabs } from './header-tabs.types';
import { CONFIG } from '../../../configuration';

export interface HeaderTabsProps {
    tabs?: Tabs[];
}

export const HeaderTabs = withRouter(({ history, location, tabs }: RouteComponentProps & HeaderTabsProps) => {
    const [value, setValue] = useState(0);
    const styles = useTabsStyles();

    const initiateTab = useCallback(() => {
        if (tabs && history.action === HistoryActions.POP) {
            const findedTab = tabs.find(({ link }: Tabs) => link === location.pathname);
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

    const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const renderTabs = useCallback(
        ({ id, link, title }: Tabs) => <CustomTab key={id} disableRipple component={Link} label={title} to={link} />,
        [tabs],
    );

    const updateIndicator = () => {
        initiateTab();
    };

    return (
        <AppBar className={styles.customTabsBar} color="default" elevation={0} position="fixed">
            <Toolbar className={styles.toolbar}>
                <TypographyWrapper variant="h6" component="a" href="/">
                    <SvgIcon className={styles.logoIcon}>
                        <EcoIcon />
                    </SvgIcon>
                    {CONFIG.APP_NAME}
                </TypographyWrapper>
            </Toolbar>
            <Location>
                <TypographyWrapper variant="subtitle2">{CONFIG.CONTACT_INFO_ADDRESS}</TypographyWrapper>
            </Location>
            <CustomTabs
                onChange={handleChange}
                value={value}
                aria-label="tabs"
                indicatorColor="secondary"
                action={updateIndicator}
                variant="scrollable"
                scrollButtons="auto"
            >
                {tabs && tabs.map(renderTabs)}
            </CustomTabs>
        </AppBar>
    );
});
