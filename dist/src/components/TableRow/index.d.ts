import * as React from 'react';
export declare type TableRowProps = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode | React.ReactNodeArray;
    onClick?: () => void;
    align?: 'middle';
    innerRef?: any;
};
export default function Index(props: TableRowProps): JSX.Element;
