import * as React from 'react';

import {ModalHeaderProps} from './types';

import {TypeService} from './../../services';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function ModalHeader(props: ModalHeaderProps) {
    const classNames = getClassNames(props);
    const closeButton = getCloseButton(props);


    return (
        <div className={classNames}
             style={props.style}
             data-has-on-close={!!props.onClose}
             ref={props.innerRef}>
            {props.children}
            {closeButton}
        </div>
    );
};



function getCloseButton(props) {
    if (TypeService.isFunction(props.onClose)) {
        return (
            <button type="button" className={'close'} aria-label="Close" onClick={() => {
                props.onClose();
            }}>
                <span aria-hidden="true">&times;</span>
            </button>
        );
    }
}



function getClassNames(props) {
    const classNames = [
        'modal-header'
    ];

    if (props.noBorder === true) {
        classNames.push('modal-header-no-border');
    }

    if (props.closeOnly === true) {
        classNames.push('modal-header-close-only modal-header-no-border');
    }

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}