import * as React from 'react'

import {MediaImageProps} from './types';

import Image from './../Image';
import {TypeService} from './../../services';

const CONSTANTS = {
    VALID_POSITIONS: {
        'top': 'align-self-start',
        'start': 'align-self-start',
        'middle': 'align-self-center',
        'center': 'align-self-center',
        'end': 'align-self-end',
        'bottom': 'align-self-end'
    }
};

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function MediaImage(props: MediaImageProps) {
    const classNames = getClassNames(props);
    const style = getStyle(props);
    
    return (
        <Image {...props} className={classNames} style={style}/>
    );
};



function getClassNames(props) {
    const classNames = [
        'media-image'
    ];
    
    if (props.className) {
        classNames.push(props.className);
    }
    
    classNames.push(getPosition(props));
    
    return classNames.join(' ');
}


function getPosition(props) {
    const defaultPosition = 'top';
    const validPositions = CONSTANTS.VALID_POSITIONS;
    
    return (props.position && validPositions[props.position]) ? validPositions[props.position] : validPositions[defaultPosition];
}


function getStyle(props) {
    let style = {};
    
    if (TypeService.isObject(props.style)) {
        style = {...style, ...props.style};
    }
    
    if (props.order === 'end' || props.order === 'last') {
        style['order'] = 2;
    }
    
    return style;
}