import * as React from 'react';

import {ClearProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function Index(props: ClearProps) {
    const classNames = getClassNames(props);

    return (
        <div className={classNames} style={props.style} ref={props.innerRef}>
            {props.children}
        </div>
    );
};



function getClassNames(props) {
    const classNames = [
        'clear'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}