import * as React from 'react';

import {BreadcrumbContainerProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export default function Index(props: BreadcrumbContainerProps) {
    const classNames = getClassNames(props);

    return (
        <div className={classNames} style={props.style} ref={props.innerRef}>
            {props.children}
        </div>
    );
};



function getClassNames(props) {
    const classNames = [
        'breadcrumb-container'
    ];

    if (props.withBackground === true) {
        classNames.push('breadcrumb-background');
    }

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}