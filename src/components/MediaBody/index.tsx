import * as React from 'react';

import {MediaBodyProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function MediaBody(props: MediaBodyProps) {
    const classNames = getClassNames(props);

    return (
        <div className={classNames} style={props.style} ref={props.innerRef}>
            {props.children}
        </div>
    );
};



function getClassNames(props) {
    const classNames = [
        'media-body'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}