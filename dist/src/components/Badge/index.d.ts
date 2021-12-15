import * as React from 'react';
declare const VALID_TYPE_ENTRIES: readonly string[];
declare const VALID_SIZE_ENTRIES: readonly string[];
export declare type BadgeProps = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode | React.ReactNodeArray;
    pill?: boolean;
    innerRef?: any;
    title?: string;
    color?: string;
    type?: (typeof VALID_TYPE_ENTRIES)[number];
    size?: (typeof VALID_SIZE_ENTRIES)[number];
};
export default function Index(props: BadgeProps): JSX.Element;
export {};
