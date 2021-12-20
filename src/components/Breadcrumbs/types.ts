import * as React from 'react';

export type BreadcrumbsProps = {
    className?: string,
    style?: React.CSSProperties,
    withBackground?: boolean,
    items: BreadcrumbItemProps[],
    onUrlChange: (url: string) => void,
    separator?: string
};


export type BreadcrumbItemProps = {
    name: string,
    url: string
}