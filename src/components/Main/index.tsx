import * as React from 'react';

import {MainProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function Index(props: MainProps) {
    const classNames = getClassNames(props);

    return (
        <main className={classNames} style={props['style']} ref={props.innerRef}>
            {props.children}
        </main>
    );
};


function getClassNames(props) {
    const classNames = [
        'main'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}