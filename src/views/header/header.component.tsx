import React, { useEffect, useState } from 'react';
import { HeaderTabs } from './header-tabs/header-tabs.component';
import { Tabs } from './header-tabs/header-tabs.types';
import { MobileTabs } from './mobile-tabs/mobile-tabs.component';
import { isMobileScreen } from '../../constants';

const mockedTabs = [{ id: 0, link: '/about', title: 'О проекте' }];

export const Header = () => {
    const [tabs, setTabs] = useState<Tabs[]>();

    useEffect(() => {
        setTabs(mockedTabs);
    }, []);

    return !isMobileScreen ? <HeaderTabs tabs={tabs} /> : <MobileTabs tabs={tabs} />;
};
