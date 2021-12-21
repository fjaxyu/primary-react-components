import * as React from 'react';


export type Option = {
    value: string,
    text: string,
    className?: string
}

export type InputRadioProps = {
    children?: React.ReactNode,
    style?: React.CSSProperties,
    className?: string | Array<string>,
    name: string,

    options: Option[],
    onChange: (string, OptionType) => void,
    focus?: boolean,

    hasError?: boolean,
    disabled?: boolean,
    title?: string,
    value?: string | number | boolean,
    id?: string,
    ref?: any,
    innerRef?: any
}