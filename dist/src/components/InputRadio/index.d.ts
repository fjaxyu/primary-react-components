import * as React from 'react';
export declare type Option = {
    value: string;
    text: string;
    className?: string;
};
export declare type InputRadioProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string | Array<string>;
    name: string;
    options: Option[];
    onChange: (string: any, OptionType: any) => void;
    focus?: boolean;
    hasError?: boolean;
    disabled?: boolean;
    title?: string;
    value?: string | number | boolean;
    id?: string;
    ref?: any;
    innerRef?: any;
};
export default function Index(props: InputRadioProps): JSX.Element;
