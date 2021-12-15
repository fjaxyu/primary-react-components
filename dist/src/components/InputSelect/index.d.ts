import * as React from 'react';
export declare type Option = {
    value: string;
    text: string;
};
export declare type InputSelectProps = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChange?: (string: any, InputSelectProps: any, { value, event, props }: {
        value: any;
        event: any;
        props: any;
    }) => void;
    options?: Option[];
    value: string | boolean | number | Record<any, unknown> | any[];
    focus?: boolean;
    disabled?: boolean;
    hasError?: boolean;
    innerRef?: any;
    mode?: string;
};
export default function Index(props: InputSelectProps): JSX.Element;
