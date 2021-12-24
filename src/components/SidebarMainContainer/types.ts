import * as React from 'react';
import {ContainerProps} from '../Container/types';

export type SidebarMainContainerProps = ContainerProps & {
    className?: string
    children: React.ReactNode,
    style?: React.CSSProperties,
};