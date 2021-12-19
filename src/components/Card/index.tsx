import * as React from 'react';

import {CardProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//



export default function Index(props: CardProps) {
    const classNames = getClassNames(props);

    return (
        <div
            className={classNames}
            style={props.style}
            ref={props.innerRef}
            onClick={() => {
                if (props.onClick) {
                    props.onClick();
                }
            }}>
            {props.children}
        </div>
    );
};



function getClassNames(props) {
    const classNames = [
        'card'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    if (!!props.onClick) {
        classNames.push('clickable');
    }

    if (Number.isInteger(props.shadow) && props.shadow > 0 && props.shadow <= 5) {
        classNames.push('box-shadow-' + props.shadow);
    } else {
        classNames.push('box-shadow-1');
    }

    return classNames.join(' ');
}