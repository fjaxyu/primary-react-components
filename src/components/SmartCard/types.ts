import * as React from 'react';

import {CardProps} from '../Card/types';
import {SizeProp} from '@fortawesome/fontawesome-svg-core';

export type SmartCardProps = {
    href?: () => void,
    onClick?: () => void,
    className?: string,

    style?: React.CSSProperties,
    headerStyle?: React.CSSProperties,
    footerStyle?: React.CSSProperties,
    bodyStyle?: React.CSSProperties,
    iconStyle?: React.CSSProperties,

    shadow?: CardProps['shadow'],
    position?: 'top' | 'bottom' | 'both',
    header?: string | React.ReactNode,
    footer?: string | React.ReactNode,
    children?: string | React.ReactNode,
    src?: string,
    iconSrc?: string,
    icon?: string,
    iconColor?: string,
    iconSize?: SizeProp,
    iconBackground?: string,
}