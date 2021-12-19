import * as React from 'react';

export type ContainerProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    id?: string,
    size?: 'sm' | 'small' | 'lg' | 'large' | string,
    centerContent?: boolean,
    inline?: boolean,
    flex?: boolean,
    mode?: 'sidebar'
}