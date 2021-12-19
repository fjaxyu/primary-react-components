import * as React from 'react';

import {ButtonGroupProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//



export default function Index(props: ButtonGroupProps) {
    const classNames = getClassNames(props);

    return (
        <div className={classNames} style={props.style} ref={props.innerRef}>
            {props.children}
        </div>
    );
};



function getClassNames(props) {
    const classNames = [
        'button-group'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    if (props.block) {
        classNames.push('block');
    }

    return classNames.join(' ');
}