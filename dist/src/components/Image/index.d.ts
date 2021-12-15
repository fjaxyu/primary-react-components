import * as React from 'react';
export declare type ImageProps = {
    src: string;
    alt?: string;
    className?: string;
    style?: React.CSSProperties;
    id?: string;
    title?: string;
    innerRef?: any;
    onClick?: () => void;
    clickHover?: boolean;
};
declare const Index: (props: ImageProps) => JSX.Element;
export default Index;
