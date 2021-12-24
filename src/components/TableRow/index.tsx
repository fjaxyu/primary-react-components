import * as React from 'react';

import {TableRowProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function TableRow(props: TableRowProps) {
    const classNames = getClassNames(props);

    return (
        <tr
            className={classNames}
            style={props.style}
            ref={props.innerRef}
            onClick={(event) => {
                if (props.onClick) {
                    props.onClick();
                }
            }}
            {...props}>
            {props.children}
        </tr>
    );
};



function getClassNames(props) {
const classNames = ['tr'];

    if (props.className) {
        classNames.push(props.className);
    }

    if (props.align) {
        if (props.align === 'middle') {
            classNames.push('align-middle');
        }
    }

    if (props.onClick) {
        classNames.push('row-clickable');
    }

    return classNames.join(' ');
}