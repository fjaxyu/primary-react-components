import * as React from 'react';

export type ListItemProps = {
    className?: string,
    style?: React.CSSProperties,
    onClick?: () => void
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
};