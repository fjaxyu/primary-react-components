import * as React from 'react';
export declare type TextProps = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    textCenter?: boolean;
    textLeft?: boolean;
    innerRef?: any;
    title?: string;
    bold?: boolean;
    italic?: boolean;
    disabled?: boolean;
    textRight?: boolean;
    type?: string;
    onClick?: (props: any, event: any) => void;
};
export default function Index(props: TextProps): JSX.Element;
