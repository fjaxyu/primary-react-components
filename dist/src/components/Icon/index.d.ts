import * as React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
export declare type IconProps = FontAwesomeIconProps & {
    icon: string;
    size?: SizeProp;
    className?: string;
    style?: React.CSSProperties;
    noPosition?: boolean;
};
export default function Index(props: IconProps): JSX.Element;
