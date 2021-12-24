import * as React from 'react';

export type MediaImageProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    src: string,
    //The vertical position of the image, relative to the rest of the media body
    position?: string,

    //Whether the image appears before or after the media body
    order?: string
};