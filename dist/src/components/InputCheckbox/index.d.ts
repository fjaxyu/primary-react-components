import * as React from 'react';
export declare type InputCheckboxProps = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChange: (string: any, InputCheckboxProps: any, { value, event, props }: {
        value: any;
        event: any;
        props: any;
    }) => void;
    value?: boolean;
    placeholder?: string;
    disabled?: boolean;
    hasError?: boolean;
    textCenter?: boolean;
    focus?: boolean;
    innerRef?: any;
};
export default function Index(props: InputCheckboxProps): JSX.Element;
