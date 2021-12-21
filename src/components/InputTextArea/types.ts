import * as React from 'react';
import {Ref} from 'react';

export type TextAreaProps = {
    className?: string | Array<string>,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    focus?: boolean,
    onChange?: (string, TextAreaProps, {value, event, props}) => void,
    onCommandEnter?: (Record) => void,
    onEnter?: (Record) => void,
    ref?: Ref<any>,
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