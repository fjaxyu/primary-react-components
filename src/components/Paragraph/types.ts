import * as React from 'react';

export type ParagraphProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    innerRef?: any,

    title?: string,
    textCenter?: boolean,
    textLeft?: boolean,
    textRight?: boolean,

    bold?: boolean,
    italic?: boolean,
    underline?: boolean,

    //A simple additional styling option to quickly format the text as a certain type
    type?: string,
    onClick?: (props, event) => void
};