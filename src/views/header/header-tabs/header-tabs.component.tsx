import { SvgIcon, Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import BuildRounded from '@material-ui/icons/BuildRounded';
import React, { useCallback, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { HistoryActions } from '../../../constants';
import { CustomTab, CustomTabs, TypographyWrapper, useTabsStyles } from './header-tabs.styles';
import { Tabs } from './header-tabs.types';
import { MemorializeTelephone } from '../../common/telephone/memorialize-telephone.component';
import { ConsultantTelephone } from '../../common/telephone/conultant-telephone.component';

export interface HeaderTabsProps {
    tabs?: Tabs[];
}

const CONTACT_INFO = 'Москва, ул. Озерная д. 46, корпус 2, территория "Автокомбинат 42" с 10.00 до 21.00 без выходных';

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
        <AppBar className={styles.customTabsBar} color="default" elevation={0} position="absolute">
            <Toolbar className={styles.toolbar}>
                <SvgIcon className={styles.logoIcon}><BuildRounded /></SvgIcon>
                    <TypographyWrapper variant="h6" component="a" href="/">
                        Opel-Center
                    </TypographyWrapper>
                    <MemorializeTelephone />
                    <ConsultantTelephone />
            </Toolbar>
            <TypographyWrapper variant="subtitle2" align="right">{CONTACT_INFO}</TypographyWrapper>
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
