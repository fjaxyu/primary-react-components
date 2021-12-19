import * as React from 'react';

import {ButtonProps} from './types';

const CONSTANTS = {
    VALID_BUTTON_TYPES: [
        'button',
        'submit'
    ],
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
        'default': 'light',
        'dark': 'dark',
        'link': 'link'
    },
    VALID_SIZES: [
        'xs',
        'sm',
        'md',
        'lg'
    ]
};

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export default function Index(props: ButtonProps) {
    const classNames = getClassNames(props);
    const buttonType = getButtonType(props);

    return (
        <button id={props.id}
                className={classNames}
                type={buttonType}
                style={props.style}
                title={props.title}
                disabled={!!props.disabled}
                data-has-on-click={!!props.onClick}
                ref={props.innerRef}
                onClick={(event) => {
                    if (props.onClick) {
                        props.onClick(props, event);
                    }
                }}>
            {props.children}
        </button>
    );
};



function getButtonType(props) {
    const validButtonTypes = CONSTANTS.VALID_BUTTON_TYPES;

    return validButtonTypes.includes(props.buttonType) ? props.buttonType : validButtonTypes[0];
}



function getClassNames(props) {
    const classNames = [
        'button'
    ];

    if (props.noDefaultType !== true) {
        classNames.push(getType(props));
    }

    if (props.block === true) {
        classNames.push('block');
    }

    if (props.outline === true) {
        classNames.push('outline');
    }

    if (props.size) {
        classNames.push(getSize(props));
    }

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}



function getSize(props): string {
    const validSizes = CONSTANTS.VALID_SIZES;
    return validSizes.includes(props.size) ? 'button-' + props.size : '';
}



function getType(props) {
    const defaultType = 'default';
    const propType = props.type;

    const validTypes = CONSTANTS.VALID_TYPES;

    return 'button-' + ((validTypes[propType]) ? validTypes[propType] : validTypes[defaultType]);
}