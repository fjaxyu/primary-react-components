import * as React from 'react';
export declare type ProgressBarProps = {
    height: number;
    value: number;
    color?: string;
    type?: string;
    animated?: boolean;
    striped?: boolean;
    showLabel?: boolean;
    className?: string;
    style?: React.CSSProperties;
};
export default function ProgressBar(props: ProgressBarProps): JSX.Element;
