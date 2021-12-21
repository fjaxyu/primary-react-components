import * as React from 'react';

export type InputNumberProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    focus?: boolean,
    mode?: string,

    //When the input changes, this function will be called
    onChange?: (string, InputNumberProps, {value, event, props}) => void,

    //The value of the input
    value?: string | number,

    autocomplete?: string,

    //The placeholder for the element
    placeholder?: string,

    //disables the input and prevents the user from entering any information
    disabled?: boolean,

    //Adds some error stylings to the input
    hasError?: boolean,

    //center the text inside the input
    textCenter?: boolean,

    innerRef?: any
};