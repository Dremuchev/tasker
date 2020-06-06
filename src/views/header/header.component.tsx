import React, { useEffect, useState } from 'react';
import { HeaderTabs } from './header-tabs/header-tabs.component';
import { Tabs } from './header-tabs/header-tabs.types';
import { MobileTabs } from './mobile-tabs/mobile-tabs.component';

const mockedTabs =  [
    {id: 0, link: "/", title: "О компании"},
    {id: 1, link: "/maintenance", title: "Техническое обслуживание"},
    {id: 2, link: "/repair", title: "Ремонт Опель"},
    {id: 3, link: "/diagnostics", title: "Диагностика опель"},
    {id: 4, link: "/electrics", title: "Электрооборудование Опель"},
    {id: 5, link: "/promotions", title: "Акции"},
    {id: 6, link: "/contact", title: "Контакты"},
    {id: 7, link: "/guarantee", title: "Гарантия"},
    {id: 8, link: "/question-answer", title: "Вопрос-ответ"}
];

const isMobileScreen = window.matchMedia('(max-width: 768px)').matches;

export const Header = () => {
    const [tabs, setTabs] = useState<Tabs[]>();

    useEffect(() => {
        setTabs(mockedTabs);
    }, []);

    return !isMobileScreen ? <HeaderTabs tabs={tabs} /> : <MobileTabs tabs={tabs} />;
};
