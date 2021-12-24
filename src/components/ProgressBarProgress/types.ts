import * as React from 'react';

export type ProgressBarProgressProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    color?: string,
    //Make the progress bar striped
    striped?: boolean,

    //If the progress bar is striped, this will animate it
    animated?: boolean,

    type?: string,
    innerRef?: any,

    value?: number,
    showLabel?: boolean
};