import * as React from 'react';
import {TypeService} from './../../services';

import {InputTextProps} from './types';

const CONSTANTS = {
    VALID_TYPES: {
        'text': 'text',
        'password': 'password',
        'email': 'email',
        'phone': 'phone'
    }
};

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export default function Index(props: InputTextProps) {
    const classes = getClasses(props);
    const type = getType(props);

    return (
        <input value={props.value}
               placeholder={props.placeholder}
               type={type}
               style={props.style}
               disabled={props.disabled}
               ref={props.innerRef}
               autoComplete={props.autocomplete}
               autoFocus={props.focus === true}
               data-has-focus={!!props.focus}
               onKeyPress={(event) => {
                   if (event.key === 'Enter' && TypeService.isFunction(props.onEnter)) {
                       props.onEnter && props.onEnter(event);
                   }
               }}
               className={classes}
               data-has-on-change={!!props.onChange}
               onChange={(event) => {
                   if (props['onChange']) {
                       const value = event.target.value;
                       props['onChange'](value, props, {value, event, props});
                   }
               }}/>
    );
}



function getClasses(props) {
    const classNames = [
        'form-control'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    if (props.mode === 'plain') {
        classNames.push('input-plain');
    }

    if (props.hasError) {
        classNames.push('has-error');
    }

    if (props.textCenter) {
        classNames.push('text-center');
    }

    if (['xl', 'lg', 'md', 'sm'].includes(props.size)) {
        classNames.push('input-size-' + props.size);
    }

    return classNames.join(' ');
}



function getType(props) {
    const selectedType = props.type;
    const defaultType = 'text';
    const typeOptions = CONSTANTS.VALID_TYPES;

    if (!typeOptions[selectedType]) {
        return typeOptions[defaultType];
    } else {
        return typeOptions[selectedType];
    }
}