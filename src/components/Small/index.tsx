import * as React from 'react';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export type SmallProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    title?: string,
    innerRef?: any,
}

export default function Index(props: SmallProps) {
    const classNames = getClassNames(props);

    return (
        <small title={props.title} className={classNames} style={props.style} ref={props.innerRef}>
            {props.children}
        </small>
    );
};



function getClassNames(props) {
    const classNames = [
        'small'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}