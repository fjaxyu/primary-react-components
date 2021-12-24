import * as React from 'react';

import {ModalContentProps} from './types';

import {ModalShouldBeClosedContext} from './../../support/ModalShouldBeClosedContext';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function ModalContent(props: ModalContentProps) {
    const classNames = getClassNames(props);

    return (
        <ModalShouldBeClosedContext.Consumer>
            {(({ModalShouldBeClosedContext, changeModalCloseValue}) => {
                return (
                    <div className={classNames} style={props.style} ref={props.innerRef} onClick={() => {
                        // @ts-ignore
                        changeModalCloseValue(false);
                    }}>
                        {props.children}
                    </div>
                );
            })}
        </ModalShouldBeClosedContext.Consumer>
    );
};



function getClassNames(props) {
    const classNames = [
        'modal-content'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}