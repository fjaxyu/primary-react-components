import * as React from 'react';

import {UnorderedListProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function Index(props: UnorderedListProps) {
    const classNames = getClassNames(props);

    return (
        <ul className={classNames} style={props.style} ref={props.innerRef}>
            {props.children}
        </ul>
    );
}



function getClassNames(props) {
    const classNames = [
        'list',
        'unordered-list'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    if (props.type === 'help') {
        classNames.push('help');
    }

    return classNames.join(' ');
}