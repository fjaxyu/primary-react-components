import * as React from 'react';

export type LabelProps = {
    className?: string,
    style?: React.CSSProperties,
    onClick?: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void,
    size?: string,
    title?: string,
    innerRef?: any,
    children?: React.ReactNode
};
