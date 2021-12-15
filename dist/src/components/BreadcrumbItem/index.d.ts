import * as React from 'react';
export declare type BreadcrumbItemProps = {
    onClick?: () => void;
    href: () => void;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode | React.ReactNodeArray;
    active?: boolean;
};
export default function Index(props: BreadcrumbItemProps): JSX.Element;
