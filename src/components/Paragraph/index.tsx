import * as React from 'react';

import {ParagraphProps} from './types';

const CONSTANTS = {
    VALID_TYPES: [
        'error',
        'warning',
        'info',
        'help'
    ]
};

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function Paragraph(props: ParagraphProps) {
    const classes = getClassNames(props);

    return (
        <p title={props.title} className={classes} style={props.style} ref={props.innerRef} onClick={() => {
            if (props.onClick) {
                props.onClick(props, {});
            }
        }}>
            {props.children}
        </p>
    );
};



function getClassNames(props) {
    const classNames = [
        'paragraph'
    ];

    classNames.push(getType(props));

    if (props.textCenter === true) {
        classNames.push('text-center');
    }

    if (props.textLeft === true) {
        classNames.push('text-left');
    }

    if (props.textRight === true) {
        classNames.push('text-right');
    }

    if (props.bold) {
        classNames.push('text-bold');
    }

    if (props.italic) {
        classNames.push('text-italic');
    }

    if (props.underline) {
        classNames.push('text-underline');
    }

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}


function getType(props) {
    const propType = props.type;
    const validTypes = CONSTANTS.VALID_TYPES;

    return ((validTypes.includes(propType)) ? ('text-' + propType) : '');
}
