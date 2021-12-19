import * as React from 'react';

import {BadgeProps} from './types';

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
    },
    VALID_SIZES: {
        'xs': 'xs',
        'extra-small': 'xs',
        'sm': 'sm',
        'small': 'sm',
        'lg': 'lg',
        'large': 'lg',
        'xl': 'xl',
        'extra-large': 'xl'
    }
};

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//



export default function Badge(props: BadgeProps) {
    const classNames = getClassNames(props);

    return (
        <div className={classNames}
             style={props.style}
             title={props.title}
             ref={props.innerRef}>
            {props.children}
        </div>
    );
};



function getClassNames(props) {
    const classNames = [
        'badge'
    ];

    classNames.push(getType(props));

    if (props.pill === true) {
        classNames.push('badge-pill');
    }

    if (props.className) {
        classNames.push(props.className);
    }

    if (props.size) {
        classNames.push(getSize(props));
    }

    return classNames.join(' ');
}



function getType(props) {
    const defaultType = 'light';
    const propType = props.type || props.color;


    const validTypes = CONSTANTS.VALID_TYPES;

    return 'badge-' + ((validTypes[propType]) ? validTypes[propType] : validTypes[defaultType]);
}



function getSize(props) {
    const defaultType = 'md';
    const propSize = props.size;


    const validSizes = CONSTANTS.VALID_SIZES;

    return 'badge-' + ((validSizes[propSize]) ? validSizes[propSize] : validSizes[defaultType]);
}