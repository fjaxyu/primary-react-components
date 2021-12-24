import * as React from 'react';

import {TextProps} from './types';

const CONSTANTS = {
    VALID_TYPES: [
        'error',
        'warning',
        'info',
        'help',
        'link'
    ]
};


//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export default function Text(props: TextProps) {
    const classes = getClasses(props);

    return (
        <span className={classes}
              style={props['style']}
              title={props['title']}
              onClick={(event) => {
                  if (props['onClick'] && props['disabled'] !== true) {
                      props['onClick'](props, event);
                  }
              }}>
            {props.children}
        </span>
    );
}



function getClasses(props) {
    const classNames = [] as String[];

    classNames.push(getType(props));

    if (props.className) {
        classNames.push(props.className);
    }

    if (props.bold === true) {
        classNames.push('bold');
    }

    if (props.italic === true) {
        classNames.push('italic');
    }

    if (props.disabled === true) {
        classNames.push('text-disabled');
    }

    if (props.onClick) {
        classNames.push('text-clickable');
    }

    if (props.textCenter === true) {
        classNames.push('text-center display-block');
    }

    return classNames.join(' ');
}



function getType(props) {
    const propType = props.type;
    const validTypes = CONSTANTS.VALID_TYPES;

    return (validTypes.includes(propType)) ? ('text-' + propType) : '';
}

