import * as React from 'react';

import Image from './../Image';
import Icon from './../Icon';
import Box from './../Box';

import {SizeProp} from '@fortawesome/fontawesome-svg-core';

const CONSTANTS = {
    VALID_POSITIONS: ['top', 'bottom', 'both'],
    DEFAULT_POSITION: 'top'
};

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export type CardIconProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    background?: string,
    position?: 'top' | 'bottom' | 'both',
    noPosition?: boolean,
    size?: SizeProp,
    color?: string,
    src?: string,
    alt?: string,
    icon: string
}



export default function Index(props: CardIconProps) {
    const classNames = getClassNames(props);
    const children = getChildren(props);

    return (
        <Box className={classNames} style={{
            padding: '50px',
            background: props.background,
            ...props.style
        }}>
            {children}
        </Box>
    );
};



function getChildren(props) {
    if (props.src) {
        return (
            <Image style={{width: '90px', height: '90px'}}
                   alt={props.alt}
                   src={props.src}/>
        );
    } else {
        let style = {
            color: undefined
        };

        if (props.color) {
            style.color = props.color;
        }

        return (
            <Icon {...props} style={style}/>
        );
    }
}



function getClassNames(props) {
    let classNames = [
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




