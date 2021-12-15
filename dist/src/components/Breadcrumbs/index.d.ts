import * as React from 'react';
export declare type BreadcrumbsProps = {
    className?: string;
    style?: React.CSSProperties;
    items: BreadcrumbItem[];
    onUrlChange: (url: string) => void;
};
export declare type BreadcrumbItem = {
    name: string;
    url: string;
};
export default function Index(props: BreadcrumbsProps): JSX.Element;
