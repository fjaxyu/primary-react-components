import * as React from 'react';

export type InputCheckboxProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,

    //When the input changes, this function will be called
    onChange: (string, InputCheckboxProps, {value, event, props}) => void,

    //The value of the input
    value?: boolean,

    //disables the input and prevents the user from entering any information
    disabled?: boolean,

    //Adds some error stylings to the input
    hasError?: boolean,

    focus?: boolean,
    innerRef?: any
};