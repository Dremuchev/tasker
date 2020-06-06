import { PropsWithChildren } from 'react';
import { ListItemProps } from '@material-ui/core';

export type CustomListItemProps = PropsWithChildren<{ component: any; to: string }> & Omit<ListItemProps, 'component' | 'button'>;
