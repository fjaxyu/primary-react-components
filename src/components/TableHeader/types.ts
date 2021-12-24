import * as React from 'react';

export type TableHeaderProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    align?: 'left' | 'center' | 'right'
};