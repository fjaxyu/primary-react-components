import * as React from 'react';

export type ProgressBarProps = {
    height: number,
    value: number,

    color?: string,
    type?: string,
    animated?: boolean,
    striped?: boolean,
    showLabel?: boolean,

    className?: string,
    style?: React.CSSProperties,
}
