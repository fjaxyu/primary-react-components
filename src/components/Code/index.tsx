import * as React from 'react';

import {CodeProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function Index(props: CodeProps) {
    const classNames = getClassNames(props);

    return (
        <code className={classNames}
              style={props.style}
              ref={props.innerRef}>
            {props.children}
        </code>
    );
};



function getClassNames(props) {
    const classNames = [
        'code'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}