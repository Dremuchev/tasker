import { SvgIcon, Toolbar, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import BuildRounded from '@material-ui/icons/BuildRounded';
import React, { useCallback, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { HistoryActions } from '../../../constants';
import { CustomTab, CustomTabs, LogoTextWrapper, TypographyWrapper, useTabsStyles } from './header-tabs.styles';
import { Tabs } from './header-tabs.types';

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
        <AppBar className={styles.customTabsBar} color="default" elevation={3}>
            <Toolbar className={styles.toolbar}>
                <SvgIcon><BuildRounded className={styles.logoIcon} /></SvgIcon>
                <LogoTextWrapper>
                    <Typography variant="h6" align="center">
                        Opel-Center
                    </Typography>
                    <TypographyWrapper variant="subtitle2" component="a" href="tel: +74952564787">
                        +7 (495) 256-47-87
                    </TypographyWrapper>
                    <TypographyWrapper variant="subtitle2" component="a" href="tel: +79151229306">
                        +7 (915) 122-93-06
                    </TypographyWrapper>
                </LogoTextWrapper>
                <CustomTabs
                    onChange={handleChange}
                    value={value}
                    aria-label="tabs"
                    indicatorColor="secondary"
                    action={updateIndicator}
                >
                    {tabs && tabs.map(renderTabs)}
                </CustomTabs>
            </Toolbar>
        </AppBar>
    );
});
