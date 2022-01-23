import * as React from 'react';

import {TypeService} from './../../services';

import {InputCheckboxProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function Index(props: InputCheckboxProps) {
    const classes = getClasses(props);
    const hasOnChange = TypeService.isFunction(props.onChange);

    return (
        <input type={'checkbox'}
               checked={!!props.value}
               style={props.style}
               disabled={props.disabled}
               ref={props.innerRef}
               className={classes}
               data-has-on-change={hasOnChange}
               onChange={(event) => {
                   if (hasOnChange) {
                       const value = event.target.checked;
                       props['onChange'](value, props, {value, event, props});
                   }
               }}/>
    );
}



function getClasses(props) {
    const classNames = [
        'form-control',
        'checkbox'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    if (props.hasError) {
        classNames.push('has-error');
    }

    return classNames.join(' ');
}