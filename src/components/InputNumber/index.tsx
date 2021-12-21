import * as React from 'react';

import {InputNumberProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//



export default function InputNumber(props: InputNumberProps) {
    const classes = getClasses(props);

    return (
        <input
               value={props.value}
               style={props.style}
               placeholder={props.placeholder}
               type={'number'}
               disabled={props.disabled}
               ref={props.innerRef}
               className={classes}
               data-has-on-change={!!props.onChange}
               onChange={(event) => {
                   if (props.onChange) {
                       const value = event.target.value;
                       props.onChange(value, props, {value, event, props});
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

    if (props.textCenter === true) {
        classNames.push('text-center');
    }

    return classNames.join(' ');
}