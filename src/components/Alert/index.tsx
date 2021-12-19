import * as React from 'react';

import {AlertProps} from './types';

const CONSTANTS = {
    VALID_TYPES: {
        'primary': 'primary',
        'blue': 'primary',
        'secondary': 'secondary',
        'success': 'success',
        'green': 'success',
        'danger': 'danger',
        'red': 'danger',
        'error': 'danger',
        'warning': 'warning',
        'yellow': 'warning',
        'orange': 'orange',
        'purple': 'purple',
        'pink': 'pink',
        'light': 'light',
        'dark': 'dark'
    }
};

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function Alert(props: AlertProps) {
    const classNames = getClassNames(props);

    return (
        <div className={classNames} style={props.style} ref={props.innerRef}>
            {props.children}
        </div>
    );
}



//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//
//PROPS


const DEFAULT_TYPE = 'primary';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//
//PRIVATE METHODS

function getClassNames(props) {
    const classNames = [
        'alert'
    ];

    classNames.push(getType(props));

    if (props.hideIfEmpty && !props.children) {
        classNames.push('display-none');
    }

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}



function getType(props) {
    const defaultType = 'primary';
    const propType = props.type;

    const validTypes = CONSTANTS.VALID_TYPES;

    return 'alert-' + ((validTypes[propType]) ? validTypes[propType] : validTypes[defaultType]);
}