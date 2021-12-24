import * as React from 'react';

export type ModalHeaderProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    onClose?: () => void,
    noBorder?: boolean,
    closeOnly?: boolean,
};