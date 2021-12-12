import * as React from 'react';

import {TypeService} from '@waveortho/services';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export type ModalHeaderProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    onClose?: () => void,
    noBorder?: boolean,
    closeOnly?: boolean,
};



export default function Index(props: ModalHeaderProps) {
    const classNames = getClassNames(props);
    const closeButton = getCloseButton(props);


    return (
        <div
             className={classNames}
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