import * as React from 'react';

export type HeaderProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    size?: (
        'extra-extra-extra-small' | 'xxxs' |
        'extra-extra-small' | 'xxs' |
        'extra-small' | 'xs' |
        'small' | 'sm' |
        'medium' | 'md' | 'default' |
        'large' | 'lg' |
        'extra-large' | 'xl' |
        'xxl' | 'extra-extra-large'
        ),
    id?: string,
    innerRef?: any,
    textCenter?: boolean,
    noTopPadding?: boolean,
    bold?: boolean,
    italic?: boolean
}
