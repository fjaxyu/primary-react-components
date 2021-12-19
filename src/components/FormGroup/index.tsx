import * as React from 'react';

import {FormGroupProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function FormGroup(props: FormGroupProps) {
    const classNames = getClassNames(props);

    return (
        <div className={classNames} style={props.style} ref={props.innerRef}>
            {props.children}
        </div>
    );
};



function getClassNames(props) {
    const classNames = [
        'form-group'
    ];

    if (props.mode === 'plain') {
        classNames.push('form-group-plain');
    }

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}