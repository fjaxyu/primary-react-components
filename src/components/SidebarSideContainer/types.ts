import * as React from 'react';
import {ContainerProps} from '../Container/types';

export type SidebarSideContainerProps = ContainerProps &  {
    className?: string,
    children?: React.ReactNode,
    fixed?: boolean,
    card?: boolean,
    style?: React.CSSProperties,
};