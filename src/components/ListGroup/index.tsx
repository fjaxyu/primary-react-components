import * as React from 'react';

import {ListGroupProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export default function ListGroup(props: ListGroupProps) {
    const classNames = getClassNames(props);

    return (
        <ul className={classNames} style={props.style} ref={props.innerRef}>
            {props.children}
        </ul>
    );
};



function getClassNames(props) {
    const classNames = [
        'list-group'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}