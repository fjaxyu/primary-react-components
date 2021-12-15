import * as React from 'react';
export declare type CardProps = {
    className?: string;
    style?: React.CSSProperties;
    isClickable?: boolean;
    children?: React.ReactNode | React.ReactNodeArray;
    innerRef?: any;
    shadow?: 1 | 2 | 3 | 4 | 5;
    onClick?: () => void;
};
export default function Index(props: CardProps): JSX.Element;
