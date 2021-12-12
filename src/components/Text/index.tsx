import * as React from 'react';

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


export type TextProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    //text align to the center
    textCenter?: boolean,

    //text align to the left
    textLeft?: boolean,
    innerRef?: any,
    title?: string,

    bold?: boolean,

    italic?: boolean,

    disabled?: boolean,

    //text align to the right
    textRight?: boolean,

    //A simple additional styling option to quickly format the text as a certain type
    type?: string,
    onClick?: (props, event) => void
}



export default function Index(props: TextProps) {
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

