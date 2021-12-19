import * as React from 'react';

import {ModalShouldBeClosedContext} from './../../support/ModalShouldBeClosedContext';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export type ModalContentProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
};



export default function Index(props: ModalContentProps) {
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