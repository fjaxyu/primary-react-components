import * as React from 'react';

import {SmallProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function Index(props: SmallProps) {
    const classNames = getClassNames(props);

    return (
        <small title={props.title} className={classNames} style={props.style} ref={props.innerRef}>
            {props.children}
        </small>
    );
};



function getClassNames(props) {
    const classNames = [
        'small'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}