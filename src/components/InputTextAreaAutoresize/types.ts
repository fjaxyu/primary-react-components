import * as React from 'react';

export type TextAreaAutoresizeProps = {
    className?: string | Array<string>,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    focus?: boolean,
    onChange?: (string, TextAreaProps, {value, event, props}) => void,
    onEnter?: (Record) => void,
    onCommandEnter?: (Record) => void,
    hasError?: boolean,
    disabled?: boolean,
    autocomplete?: string,
    autosize?: boolean,
    placeholder?: string,
    value?: string,
    rows?: number,
    textCenter?: boolean,
    mode?: 'plain' | string,
    maxRows?: number,
    minRows?: number,
    onHeightChange?: (height) => void,
    cacheMeasurements?: boolean,
}
