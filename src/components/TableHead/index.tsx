import * as React from 'react';

import {TableHeadProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function TableHead(props: TableHeadProps) {
    const classNames = getClassNames(props);

    return (
        <thead className={classNames} style={props.style} ref={props.innerRef}>
            {props.children}
        </thead>
    );
};



function getClassNames(props) {
    const classNames = [
        'table-head'
    ];

    if (props.alignLeft) {
        classNames.push('align-left');
    }

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}