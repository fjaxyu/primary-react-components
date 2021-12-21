import * as React from 'react';

export type LinkProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    href?: () => void,
    onClick?: () => void,
    innerRef?: any,
    notHref?: boolean,
    disabled?: boolean,
    textCenter?: boolean,
    title?: string
}