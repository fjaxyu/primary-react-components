import * as React from 'react'

import {LineBreakProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export default function Index(props: LineBreakProps) {
    const classNames = getClassNames(props);
    const Tag = getTag(props);

    return (
        <Tag className={classNames} style={props.style} ref={props.innerRef}/>
    );
}



function getClassNames(props) {
    const classNames = [
        'line-break'
    ];

    if (props.noMargin === true) {
        classNames.push('no-margins');
    }

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}


function getTag(props) {
    return (props.clear === true || props.blank === true || props.br === true) ? 'br' : 'hr';
}