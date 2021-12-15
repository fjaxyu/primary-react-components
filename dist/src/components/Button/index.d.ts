import * as React from 'react';
export declare type ButtonProps = {
    onClick?: (ButtonProps: any, any: any) => void;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode | React.ReactNodeArray;
    innerRef?: any;
    id?: string;
    buttonType?: 'button' | 'submit';
    noDefaultType?: boolean;
    block?: boolean;
    outline?: boolean;
    title?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    type?: ('primary' | 'blue' | 'secondary' | 'success' | 'green' | 'danger' | 'red' | 'error' | 'warning' | 'yellow' | 'orange' | 'purple' | 'pink' | 'light' | 'default' | 'dark' | 'link');
    disabled?: boolean;
};
export default function Index(props: ButtonProps): JSX.Element;
