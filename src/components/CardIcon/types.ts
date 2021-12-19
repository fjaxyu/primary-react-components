import * as React from 'react';

import {SizeProp} from '@fortawesome/fontawesome-svg-core';

export type CardIconProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    background?: string,
    position?: 'top' | 'bottom' | 'both',
    noPosition?: boolean,
    size?: SizeProp,
    color?: string,
    src?: string,
    alt?: string,
    icon: string
}