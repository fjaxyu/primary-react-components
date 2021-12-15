import * as React from 'react';
export declare type FormProps = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode | React.ReactNodeArray;
    innerRef?: any;
    onSubmit?: (FormProps: any, any: any) => void;
};
export default function Index(props: FormProps): JSX.Element;
