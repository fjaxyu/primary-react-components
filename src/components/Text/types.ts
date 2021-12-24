import * as React from 'react';

export type TextProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    //text align to the center
    textCenter?: boolean,

    //text align to the left
    textLeft?: boolean,
    innerRef?: any,
    title?: string,

    bold?: boolean,

    italic?: boolean,

    disabled?: boolean,

    //text align to the right
    textRight?: boolean,

    //A simple additional styling option to quickly format the text as a certain type
    type?: string,
    onClick?: (props, event) => void
}