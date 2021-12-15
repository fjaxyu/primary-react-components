import * as React from 'react';
declare const TS_VALID_SIZES: readonly string[];
export declare type ModalProps = {
    className?: string;
    style?: React.CSSProperties;
    show: boolean;
    size?: (typeof TS_VALID_SIZES) | string;
    centered?: boolean;
    disableEscapeClose?: boolean;
    disableBackgroundClose?: boolean;
    closeModal?: () => void;
    onBackgroundClick?: () => void;
    onEscapeClick?: () => void;
    onShow?: () => void;
    onHide?: () => void;
};
export declare type ModalState = {
    dialogueWasClicked: boolean;
};
export default class Index extends React.Component<ModalProps, ModalState> {
    constructor(props: any);
    keydown(event: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: any): void;
    escapeKeyClicked(event: any): void;
    render(): JSX.Element;
    getModal(props: any): JSX.Element | "";
    getModalBackdrop(props: any): JSX.Element | "";
    backgroundClicked(): void;
    _getModalClasses(props: any): string;
    _getModalDialogClasses(props: any): string;
    _getModalSize(size: any): string;
    _getBackdropClasses(props: any): string;
}
export {};
