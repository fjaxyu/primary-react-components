import * as React from 'react';

export type CardImageProps = {
    src: string,

    alt?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,

    noPosition?: boolean,
    background?: string,
    position?: 'top' | 'bottom' | 'both'
}
