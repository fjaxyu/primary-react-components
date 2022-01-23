import * as React from 'react';

import {InputSelectOption} from '../InputSelect/types';
import {InputRadioOption} from '../InputRadio/types';

export type InputOptionList = InputSelectOption[] | InputRadioOption[];

export type InputProps = {
    onChange: (value: string) => void,
    type: 'text' | 'password' | 'email' | 'phone' |
        'textarea' |
        'checkbox' |
        'select' |
        'radio' |
        'number' |
        'date',
    value: string | number | Date | boolean,

    options?: InputOptionList,
    onEnter?: (value: string) => void,
    onCommandEnter?: (value: string) => void,
    autocomplete?: string,
    required?: boolean,
    disabled?: boolean,
    focus?: boolean,
    name?: string,

    style?: React.CSSProperties,
    inputStyle?: React.CSSProperties,
    labelStyle?: React.CSSProperties,

    className?: string,
    mode?: 'plain',

    ref: any,
    placeholder?: string,
    helpMessage?: string,
    errorMessage?: string,
    textCenter?: boolean,
    rows?: number,

    showMessageLength?: boolean,
    maxMessageLength?: number,
    autoresize?: boolean,

    maxRows?: number,
    minRows?: number,
    onHeightChange?: (height) => void,
    cacheMeasurements?: boolean,

    label?: string,
    labelSize?: string,
}