import * as React from 'react';

import Image from './../Image';

import {CardImageProps} from './types';

const CONSTANTS = {
    VALID_POSITIONS: ['top', 'bottom', 'both'],
    DEFAULT_POSITION: 'top'
};

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export default function CardImage(props: CardImageProps) {
    const classNames = getClassNames(props);

    return (
        <Image {...props} className={classNames}/>
    );
};



function getClassNames(props) {
    const classNames = [
        'card-img'
    ];

    const validPositions = CONSTANTS.VALID_POSITIONS;
    let selectedPosition = CONSTANTS.DEFAULT_POSITION;

    if (validPositions.includes(props.position)) {
        selectedPosition = props.position;
    }

    if (props.noPosition !== true) {
        classNames.push('card-img-' + selectedPosition);
    }

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}