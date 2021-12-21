import * as React from 'react';


export type InputTextProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    innerRef?: any,

    autocomplete?: string,

    //When the input changes, this function will be called
    onChange?: (string, InputTextProps, {value, event, props}) => void,

    onEnter?: (Record) => void,

    //The value of the input
    value?: string,

    size?: string,

    //If true, this will set the focus automatically when the input is loaded
    focus?: boolean,

    //The type of the input
    type?: string,

    //The placeholder for the element
    placeholder?: string,

    //disables the input and prevents the user from entering any information
    disabled?: boolean,

    //Adds some error stylings to the input
    hasError?: boolean,

    //center the text inside the input
    textCenter?: boolean,

    mode?: string
};