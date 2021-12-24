import * as React from 'react';

export type TableProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    striped?: boolean,
    hover?: boolean,
    bordered?: boolean,
    small?: boolean,
    responsive?: boolean,
    'responsive-sm'?: boolean,
    'responsive-md'?: boolean,
    'responsive-lg'?: boolean,
    'responsive-xl'?: boolean,
};
