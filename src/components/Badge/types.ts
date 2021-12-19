import * as React from 'react';

export type BadgeProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    pill?: boolean,
    innerRef?: any,
    title?: string,
    color?: string,

    type?: (
        'primary' | 'blue' |
        'secondary' |
        'success' | 'green' |
        'danger' | 'red' | 'error' |
        'warning' | 'yellow' |
        'orange' | 'purple' |
        'pink' |
        'light' |
        'dark'
        ),

    size?: (
        'xs' | 'extra-small' |
        'sm' | 'small' |
        'lg' | 'large' |
        'xl' | 'extra-large'
        )
}