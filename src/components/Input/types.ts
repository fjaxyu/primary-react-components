import * as React from 'react';

import {Option as InputSelectOption} from '../InputSelect';
import {Option as InputRadioOption} from '../InputRadio';

export type InputProps = {
    onChange: (value: string) => void,
    type: string,
    value: string | number | Date | boolean,

    options?: InputSelectOption[] | InputRadioOption[],
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