import * as React from 'react';

export type TableRowProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    onClick?: () => void,
    align?: 'middle',
    innerRef?: any,
};