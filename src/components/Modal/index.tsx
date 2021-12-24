import * as React from 'react';

import {ModalProps} from './types';

import {TypeService} from './../../services';

const CONSTANTS = {
    VALID_SIZES: {
        'small': 'sm',
        'sm': 'sm',
        'large': 'lg',
        'lg': 'lg',
        'extra-large': 'xl',
        'xl': 'xl'
    }
};

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export type ModalState = {
    dialogueWasClicked: boolean
}



export default class Index extends React.Component<ModalProps, ModalState> {


    constructor(props) {
        super(props);

        this.state = {
            dialogueWasClicked: false
        };

        this.keydown = this.keydown.bind(this);
    }



    keydown(event) {
        if (event.keyCode === 27) { //escape key
            this.escapeKeyClicked(event);
        }
    }



    componentDidMount() {
        document.addEventListener('keydown', this.keydown, false);
    }



    componentWillUnmount() {
        if (this.props.show) {
            document.removeEventListener('keydown', this.keydown, false);
        }
    }


    componentDidUpdate(prevProps) {
        if (this.props.show !== prevProps.show) {
            let isShowing = (this.props.show === true);

            try {
                document.body.classList.toggle('modal-is-open', isShowing);
            } catch (error) {

            }

            if (!isShowing && this.props.onHide && TypeService.isFunction(this.props.onHide)) {
                this.props.onHide();
            }

            if (isShowing && this.props.onShow && TypeService.isFunction(this.props.onShow)) {
                this.props.onShow();
            }
        }
    }



    escapeKeyClicked(event) {
        const props = this.props;

        if (props.show === true && props.disableEscapeClose !== true) {
            if (props.onEscapeClick && TypeService.isFunction(props.onEscapeClick)) {
                props.onEscapeClick();
            } else if (props.closeModal && TypeService.isFunction(props.closeModal)) {
                props.closeModal();
            }
        }
    }



    render() {
        const props = this.props;

        const modal = this.getModal(props);
        const modalBackdrop = this.getModalBackdrop(props);

        return (
            <>
                {modal}
                {modalBackdrop}
            </>
        );
    }



    getModal(props) {
        if (props.show === true) {
            const modalClasses = this._getModalClasses(props);
            const modalDialogClasses = this._getModalDialogClasses(props);

            return (
                <div className={modalClasses}
                     style={{display: 'block', opacity: 1, ...props.style}}
                     onClick={() => {
                         setTimeout(() => {
                             if (!this.state.dialogueWasClicked) {
                                 this.backgroundClicked();
                             } else {
                                 this.setState({
                                     dialogueWasClicked: false
                                 });
                             }
                         }, 1);
                     }}>
                    <div className={modalDialogClasses} onClick={() => {
                        this.setState({
                            dialogueWasClicked: true
                        });
                    }}>
                        {props.children}
                    </div>
                </div>
            );
        } else {
            return ('');
        }
    }



    getModalBackdrop(props) {
        if (props.show === true) {
            const backdropClasses = this._getBackdropClasses(props);

            return (
                <div className={backdropClasses}/>
            );
        } else {
            return ('');
        }
    }



    //--==--==----==--==--==--==----==--==----==--==----==--==--==--==----==--==--//
    //PUBLIC METHODS



    backgroundClicked() {
        const props = this.props;

        if (props.disableBackgroundClose !== true) {
            if (props.onBackgroundClick && TypeService.isFunction(props.onBackgroundClick)) {
                props.onBackgroundClick();
            } else if (props.closeModal && TypeService.isFunction(props.closeModal)) {
                props.closeModal();
            }
        }
    }



    //--==--==----==--==--==--==----==--==----==--==----==--==--==--==----==--==--//
    //PRIVATE METHODS



    _getModalClasses(props) {
        let classes = [
            'modal'
        ];

        if (props.show === true) {
            classes.push('modal-open fade show');
        }

        if (props.className) {
            classes.push(props.className);
        }

        return classes.join(' ');
    }



    _getModalDialogClasses(props) {
        let classes = [
            'modal-dialog'
        ];

        if (props.centered === true) {
            classes.push('modal-dialog-centered');
        }

        classes.push(this._getModalSize(props.size));

        return classes.join(' ');
    }



    _getModalSize(size) {
        const validSizes = CONSTANTS.VALID_SIZES;

        return (validSizes[size]) ? ('modal-' + validSizes[size]) : 'modal-md';
    }



    _getBackdropClasses(props) {
        let classes = [
            'modal-backdrop'
        ];

        if (props.show === true) {
            classes.push('fade show');
        }

        return classes.join(' ');
    }
}