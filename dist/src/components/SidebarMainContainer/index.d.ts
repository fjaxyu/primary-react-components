import * as React from 'react';
import { ContainerProps } from './../Container';
export declare type SidebarCompanionProps = ContainerProps & {
    className?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
};
export default function SidbarMainContainer(props: SidebarCompanionProps): JSX.Element;
