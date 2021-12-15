import * as React from 'react';
export declare type InputTextProps = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    innerRef?: any;
    autocomplete?: string;
    onChange?: (string: any, InputTextProps: any, { value, event, props }: {
        value: any;
        event: any;
        props: any;
    }) => void;
    onEnter?: (Record: any) => void;
    value?: string;
    size?: string;
    focus?: boolean;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    hasError?: boolean;
    textCenter?: boolean;
    mode?: string;
};
export default function Index(props: InputTextProps): JSX.Element;
