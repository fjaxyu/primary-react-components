import * as React from 'react';

const CONSTANTS = {
    VALID_TYPES: [
        'prepend',
        'append'
    ]
};

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export type InputGroupItemProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    type?: 'prepend' | 'append'
}

export default function Index(props: InputGroupItemProps) {
    const classNames = getClassNames(props);

    return (
        <div className={classNames} style={props.style} ref={props.innerRef}>
            {props.children}
        </div>
    );
};



function getClassNames(props) {
    const classNames = [] as String[];

    if (props.className) {
        classNames.push(props.className);
    }

    classNames.push(getType(props));

    return classNames.join(' ');
}


function getType(props) {
    const validTypes = CONSTANTS.VALID_TYPES;

    return 'input-group-' + ((props.type && validTypes.includes(props.type)) ? props.type : validTypes[0]);
}