import * as React from 'react';
import { ContainerProps } from './../Container';
export declare type SidebarProps = ContainerProps & {
    className?: string;
    children?: React.ReactNode;
    fixed?: boolean;
    card?: boolean;
    style?: React.CSSProperties;
};
export default function SidebarSideContainer(props: SidebarProps): JSX.Element;
