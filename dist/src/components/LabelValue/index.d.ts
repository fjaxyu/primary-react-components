import * as React from 'react';
export declare type LabelValueProps = {
    label: string | number | React.ReactNode;
    value: string | number | React.ReactNode;
    style?: React.CSSProperties;
    size?: 'sm';
    className?: string;
    labelStyle?: React.CSSProperties;
    labelLink?: () => void;
    labelClick?: () => void;
    labelLoading?: boolean;
    valueStyle?: React.CSSProperties;
    valueLink?: () => void;
    valueClick?: () => void;
    valueLoading?: boolean;
};
export default function Index(props: LabelValueProps): JSX.Element;
