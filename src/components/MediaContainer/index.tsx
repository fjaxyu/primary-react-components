import * as React from 'react';

import {MediaContainerProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function MediaContainer(props: MediaContainerProps) {
    const classNames = getClassNames(props);

    return (
        <div className={classNames} style={props.style} ref={props.innerRef}>
            {props.children}
        </div>
    );
};



function getClassNames(props) {
    const classNames = [
        'media'
    ];

    if ([props.border, props.withBorder, props.borderBottom, props.bordered].includes(true)) {
        classNames.push('media-border-bottom');
    }

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}