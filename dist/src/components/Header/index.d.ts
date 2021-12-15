import * as React from 'react';
export default function Header(props: HeaderProps): JSX.Element;
export declare type HeaderProps = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode | React.ReactNodeArray;
    size?: string;
    id?: string;
    innerRef?: any;
    textCenter?: boolean;
    noTopPadding?: boolean;
    bold?: boolean;
    italic?: boolean;
};
