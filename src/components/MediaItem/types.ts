import * as React from 'react';

export type MediaItemProps = {
    className: string,
    style?: React.CSSProperties,
    border?: boolean,
    borderBottom?: boolean,
    src: string,
    position?: string,
    children: React.ReactNode,
};
