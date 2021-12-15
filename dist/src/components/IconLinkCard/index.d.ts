import * as React from 'react';
import { IconProps } from './../Icon';
export declare type IconCardLinkProps = {
    onClick: () => void;
    icon: IconProps['icon'];
    backgroundColor: string;
    text: string;
    className?: string;
    iconColor?: IconProps['color'];
    iconStyle?: IconProps['style'];
    iconSize?: IconProps['size'];
    style?: React.CSSProperties;
    iconContainerStyle?: React.CSSProperties;
    textContainerStyle?: React.CSSProperties;
    textStyle?: React.CSSProperties;
};
export default function Index(props: IconCardLinkProps): JSX.Element;
