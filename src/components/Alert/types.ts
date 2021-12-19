import * as React from 'react';



export type AlertProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,

    //Hide the alert if the contents are empty
    hideIfEmpty?: boolean,

    type?: (
        'primary' | 'blue' |
        'secondary' |
        'success' | 'green' |
        'danger' | 'red' | 'error' |
        'warning' | 'yellow' |
        'orange' |
        'purple' |
        'pink' |
        'light' |
        'dark'
    )
}