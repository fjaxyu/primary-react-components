import * as React from 'react';

export type BreadcrumbsProps = {
    className?: string,
    style?: React.CSSProperties,
    items: BreadcrumbItemProps[],
    onUrlChange: (url: string) => void
};


export type BreadcrumbItemProps = {
    name: string,
    url: string
}