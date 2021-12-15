import * as React from 'react';
declare const Index: (props: LabelProps) => JSX.Element;
export default Index;
export declare type LabelProps = {
    className?: string;
    style?: React.CSSProperties;
    onClick?: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
    size?: string;
    title?: string;
    innerRef?: any;
    children?: React.ReactNode;
};
