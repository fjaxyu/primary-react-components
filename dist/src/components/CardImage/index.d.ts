import * as React from 'react';
export declare type CardImageProps = {
    src: string;
    alt?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode | React.ReactNodeArray;
    noPosition?: boolean;
    background?: string;
    position?: 'top' | 'bottom' | 'both';
};
export default function Index(props: CardImageProps): JSX.Element;
