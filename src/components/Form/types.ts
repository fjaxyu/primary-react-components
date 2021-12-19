import * as React from 'react';

export type FormProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    onSubmit?: (FormProps, any) => void
}