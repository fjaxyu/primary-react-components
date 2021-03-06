import * as React from 'react';

import {InputGroupProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function Index(props: InputGroupProps) {
    const classNames = getClassNames(props);

    return (
        <div className={classNames} style={props.style} ref={props.innerRef}>
            {props.children}
        </div>
    );
};



function getClassNames(props) {
    const classNames = [
        'input-group'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}