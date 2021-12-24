import * as React from 'react';

import {RequiredProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function Required(props: RequiredProps) {
    const classNames = getClassNames(props);

    return (
        <sup className={classNames} style={props.style} ref={props.innerRef}>*</sup>
    );
};



function getClassNames(props) {
    const classNames = [
        'required'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}