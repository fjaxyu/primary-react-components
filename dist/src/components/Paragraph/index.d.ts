import * as React from 'react';
declare const Index: (props: ParagraphProps) => JSX.Element;
export default Index;
export declare type ParagraphProps = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    innerRef?: any;
    title?: string;
    textCenter?: boolean;
    textLeft?: boolean;
    textRight?: boolean;
    type?: string;
    onClick?: (props: any, event: any) => void;
};
