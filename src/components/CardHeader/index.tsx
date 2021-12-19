import * as React from 'react';

import Box from './../Box';

import {CardHeaderProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export default function Index(props: CardHeaderProps) {
    const classNames = getClassNames(props);

    return (
        <Box className={classNames} style={props.style} ref={props.innerRef}>
            {props.children}
        </Box>
    );
};



function getClassNames(props) {
    const classNames = [
        'card-header'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}