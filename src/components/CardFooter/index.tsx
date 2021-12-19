import * as React from 'react';

import {CardFooterProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function Index(props: CardFooterProps) {
    const classNames = getClassNames(props);

    return (
        <div className={classNames} style={props.style} ref={props.innerRef}>
            {props.children}
        </div>
    );
};



function getClassNames(props) {
    const classNames = [
        'card-footer'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}