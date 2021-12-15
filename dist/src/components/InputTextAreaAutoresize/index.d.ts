import * as React from 'react';
export declare type TextAreaAutoresizeProps = {
    className?: string | Array<string>;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    focus?: boolean;
    onChange?: (string: any, TextAreaProps: any, { value, event, props }: {
        value: any;
        event: any;
        props: any;
    }) => void;
    onEnter?: (Record: any) => void;
    onCommandEnter?: (Record: any) => void;
    hasError?: boolean;
    disabled?: boolean;
    autocomplete?: string;
    autosize?: boolean;
    placeholder?: string;
    value?: string;
    rows?: number;
    textCenter?: boolean;
    mode?: 'plain' | string;
    maxRows?: number;
    minRows?: number;
    onHeightChange?: (height: any) => void;
    cacheMeasurements?: boolean;
};
export default function Index(props: TextAreaAutoresizeProps): JSX.Element;
