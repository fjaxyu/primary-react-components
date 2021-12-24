import * as React from 'react';

import {TableBodyProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function TableBody(props: TableBodyProps) {
    const classNames = getClassNames(props);

    return (
        <tbody className={classNames}
               style={props.style}
               {...props}
               ref={props.innerRef}>
            {props.children}
        </tbody>
    );
};



function getClassNames(props) {
    const classNames = [
        'table-body'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}