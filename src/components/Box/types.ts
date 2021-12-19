import * as React from 'react';

export type BoxProps = {
    className?: string | Array<string>,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    shadow?: boolean | 1 | 2 | 3 | 4 | 5,
    title?: string,
    onClick?: () => void,
    onMouseOver?: any,
    onMouseEnter?: any,
    onMouseLeave?: any,
    id?: string
}