import * as React from 'react';

export type TableDataProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    colSpan?: number,
    colspan?: number,
    align?: 'left' | 'center' | 'right'
};