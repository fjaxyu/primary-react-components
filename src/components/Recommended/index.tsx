import * as React from 'react';

import {RecommendedProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function Index(props: RecommendedProps) {
    const classNames = getClassNames(props);

    return (
        <sup className={classNames} style={props.style} ref={props.innerRef}>*</sup>
    );
};



function getClassNames(props) {
    const classNames = [
        'recommended'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}