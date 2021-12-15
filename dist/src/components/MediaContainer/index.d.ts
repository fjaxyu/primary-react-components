import * as React from 'react';
export declare type MediaContainerProps = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode | React.ReactNodeArray;
    innerRef?: any;
    border?: boolean;
    withBorder?: boolean;
    borderBottom?: boolean;
    bordered?: boolean;
};
export default function MediaContainer(props: MediaContainerProps): JSX.Element;
