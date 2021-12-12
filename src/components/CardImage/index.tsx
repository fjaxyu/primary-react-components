import * as React from 'react';

import Image from './Image';

const CONSTANTS = {
    VALID_POSITIONS: ['top', 'bottom', 'both'],
    DEFAULT_POSITION: 'top'
};

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export type CardImageProps = {
    src: string,

    alt?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,

    noPosition?: boolean,
    background?: string,
    position?: 'top' | 'bottom' | 'both'
}

export default function Index(props: CardImageProps) {
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