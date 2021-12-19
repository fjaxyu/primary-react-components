import * as React from 'react';

export type InputDateProps = {
    className?: string,
    style?: React.CSSProperties,

    // innerRef?: React.LegacyRef<HTMLInputElement>,
    innerRef?: any,

    //When the input changes, this function will be called
    onChange?: (value) => void,

    //The value of the input
    value?: Date,

    autocomplete?: string,

    //If true, this will set the focus automatically when the input is loaded
    focus?: boolean,

    //The placeholder for the element
    placeholder?: string,

    //disables the input and prevents the user from entering any information
    disabled?: boolean,

    //Adds some error stylings to the input
    hasError?: boolean,

    //center the text inside the input
    textCenter?: boolean
};