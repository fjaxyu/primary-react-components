import * as React from 'react';
export declare type ListGroupItemProps = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode | React.ReactNodeArray;
    onClick?: () => void;
    badge?: string;
    badgeType?: string;
    badgeColor?: string;
};
export default function Index(props: ListGroupItemProps): JSX.Element;
