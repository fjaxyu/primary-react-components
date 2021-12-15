import * as React from 'react';
declare const TS_VALID_SIZES: readonly string[];
export declare type ContainerProps = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode | React.ReactNodeArray;
    id?: string;
    size?: typeof TS_VALID_SIZES | string;
    centerContent?: boolean;
    inline?: boolean;
    flex?: boolean;
    mode?: 'sidebar';
};
declare const _default: React.ForwardRefExoticComponent<ContainerProps & React.RefAttributes<unknown>>;
export default _default;
