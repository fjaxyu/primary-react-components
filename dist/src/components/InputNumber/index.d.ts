import * as React from 'react';
export declare type InputNumberProps = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    focus?: boolean;
    mode?: string;
    onChange?: (string: any, InputNumberProps: any, { value, event, props }: {
        value: any;
        event: any;
        props: any;
    }) => void;
    value?: string | number;
    autocomplete?: string;
    placeholder?: string;
    disabled?: boolean;
    hasError?: boolean;
    textCenter?: boolean;
    innerRef?: any;
};
export default function Index(props: InputNumberProps): JSX.Element;
