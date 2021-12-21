import * as React from 'react'

import {LabelProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function Label(props: LabelProps) {
    const classNames = getClassNames(props);
    
    return (
        <label title={props.title} className={classNames} style={props.style} onClick={props.onClick} ref={props.innerRef}>
            {props.children}
        </label>
    );
};


function getClassNames(props) {
    const classNames = ['label'];
    
    if (props.className) {
        classNames.push(props.className);
    }
    
    if (props.size && getSize(props.size)) {
        classNames.push(getSize(props.size));
    }
    
    return classNames.join(' ');
}



function getSize(value) {
    const sizeMap = {
        'sm': 'small',
        'small': 'small',
        'lg': 'large',
        'large': 'large'
    };
    
    return (!!sizeMap[value]) ? sizeMap[value] : '';
}