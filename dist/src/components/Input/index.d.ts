import * as React from 'react';
import { Option as InputSelectOption } from './../InputSelect';
import { Option as InputRadioOption } from './../InputRadio';
declare type InputProps = {
    onChange: (value: string) => void;
    type: string;
    value: string | number | Date | boolean;
    options?: InputSelectOption[] | InputRadioOption[];
    onEnter?: (value: string) => void;
    onCommandEnter?: (value: string) => void;
    autocomplete?: string;
    required?: boolean;
    disabled?: boolean;
    focus?: boolean;
    name?: string;
    style?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    className?: string;
    mode?: 'plain';
    ref: any;
    placeholder?: string;
    helpMessage?: string;
    errorMessage?: string;
    textCenter?: boolean;
    rows?: number;
    showMessageLength?: boolean;
    maxMessageLength?: number;
    autoresize?: boolean;
    maxRows?: number;
    minRows?: number;
    onHeightChange?: (height: any) => void;
    cacheMeasurements?: boolean;
    label?: string;
    labelSize?: string;
};
declare const _default: React.ForwardRefExoticComponent<Pick<InputProps, "label" | "style" | "className" | "focus" | "disabled" | "textCenter" | "name" | "type" | "mode" | "onChange" | "options" | "value" | "onEnter" | "onCommandEnter" | "autocomplete" | "required" | "inputStyle" | "labelStyle" | "placeholder" | "helpMessage" | "errorMessage" | "rows" | "showMessageLength" | "maxMessageLength" | "autoresize" | "maxRows" | "minRows" | "onHeightChange" | "cacheMeasurements" | "labelSize"> & React.RefAttributes<unknown>>;
export default _default;
