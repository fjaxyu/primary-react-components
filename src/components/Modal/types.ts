import * as React from 'react';

export type ModalProps = {
    className?: string,
    style?: React.CSSProperties,
    show: boolean,
    size?: (
        'sm' | 'small' |
        'lg' | 'large' |
        'xl' | 'extra-large'
        ),
    centered?: boolean,
    disableEscapeClose?: boolean,
    disableBackgroundClose?: boolean,
    closeModal?: () => void,
    onBackgroundClick?: () => void,
    onEscapeClick?: () => void,
    onShow?: () => void,
    onHide?: () => void,
};