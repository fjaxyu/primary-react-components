import * as React from 'react';

import {ModalFooterProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function Index(props: ModalFooterProps) {
    const classNames = getClassNames(props);

    return (
        <div className={classNames} style={props.style} ref={props.innerRef}>
            {props.children}
        </div>
    );
};



function getClassNames(props) {
    const classNames = [
        'modal-footer'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}