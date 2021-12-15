import * as React from 'react';
export declare type ProgressBarProgressProps = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    color?: string;
    striped?: boolean;
    animated?: boolean;
    type?: string;
    innerRef?: any;
    value?: number;
    showLabel?: boolean;
};
export default function ProgressBarProgress(props: ProgressBarProgressProps): JSX.Element;
