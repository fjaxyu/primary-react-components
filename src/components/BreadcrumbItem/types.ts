import * as React from 'react';

export type BreadcrumbItemProps = {
    onClick?: () => void,
    href: () => void,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    active?: boolean
}