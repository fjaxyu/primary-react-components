import * as React from 'react';

export type ListGroupItemProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    onClick?: () => void,
    badge?: string,
    badgeType?: string,
    badgeColor?: string
}