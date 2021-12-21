import * as React from 'react';

export type InputSelectOption = {
    value: string,
    text: string
}

export type InputSelectProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,

    //When the input changes, this function will be called
    onChange?: (string, InputSelectProps, {value, event, props}) => void,

    //The list of possible radio options that the user can select from
    options?: InputSelectOption[],

    //The value of the input
    value: string | boolean | number | Record<any, unknown> | any[],

    //If true, this will set the focus automatically when the input is loaded
    focus?: boolean,

    //disables the input and prevents the user from entering any information
    disabled?: boolean,

    //Adds some error stylings to the input
    hasError?: boolean,

    innerRef?: any,

    mode?: string
};
