import * as React from 'react';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export type RecommendedProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
}

export default function Index(props: RecommendedProps) {
    const classNames = getClassNames(props);

    return (
        <sup className={classNames} style={props.style} ref={props.innerRef}>*</sup>
    );
};



function getClassNames(props) {
    const classNames = [
        'recommended'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}