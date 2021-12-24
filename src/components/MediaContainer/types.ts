import * as React from 'react';

export type MediaContainerProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    border?: boolean,
    withBorder?: boolean,
    borderBottom?: boolean,
    bordered?: boolean,
}