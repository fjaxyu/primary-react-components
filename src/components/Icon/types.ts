import * as React from 'react';
import {FontAwesomeIconProps} from '@fortawesome/react-fontawesome';
import {SizeProp} from '@fortawesome/fontawesome-svg-core';

export type IconProps = FontAwesomeIconProps & {
    icon: string,
    size?: SizeProp,

    className?: string,
    style?: React.CSSProperties,
    noPosition?: boolean,
}