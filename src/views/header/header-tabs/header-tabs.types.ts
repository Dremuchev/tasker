import { TabsProps, TabProps } from '@material-ui/core';
import { Link } from 'react-router-dom';

export interface Tabs {
    id: number;
    link: string;
    title: string;
}

export interface CustomTabProps extends TabProps {
    label: string;
    component: typeof Link;
    to: string;
}

export interface CustomTabsProps extends Omit<TabsProps, 'value' | 'onChange'> {
    value: number;
    onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}
