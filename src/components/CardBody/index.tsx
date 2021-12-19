import * as React from 'react';

import {CardBodyProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export default function Index(props: CardBodyProps) {
    const classNames = getClassNames(props);

    return (
        <div className={classNames} style={props.style} ref={props.innerRef}>
            {props.children}
        </div>
    );
};



function getClassNames(props) {
    const classNames = [
        'card-body'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}