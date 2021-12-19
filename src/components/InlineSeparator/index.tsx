import * as React from 'react';

import {InlineSeparatorProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function InlineSeparator(props: InlineSeparatorProps) {
    const classNames = getClassNames(props);

    return (
        <div className={classNames} style={props.style} ref={props.innerRef}>
            {props.children}
        </div>
    );
};



function getClassNames(props) {
    const classNames = [
        'inline-separator'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}