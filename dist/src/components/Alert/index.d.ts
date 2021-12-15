import * as React from 'react';
export default function Alert(props: AlertProps): JSX.Element;
declare const VALID_TYPE_ENTRIES: readonly string[];
export declare type AlertProps = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode | React.ReactNodeArray;
    innerRef?: any;
    hideIfEmpty?: boolean;
    type?: (typeof VALID_TYPE_ENTRIES)[number];
};
export {};
