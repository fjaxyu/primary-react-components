import * as React from 'react';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//



export type BreadcrumbSeparatorProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    separator?: string
}



export default function Index(props: BreadcrumbSeparatorProps) {
    const classNames = getClassNames(props);
    const separator = getSeparator(props);

    return (
        <span className={classNames} style={props.style} ref={props.innerRef}>
            {separator}
        </span>
    );
}



function getClassNames(props) {
    const classNames = [
        'breadcrumb-separator'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}



function getSeparator(props) {
    const defaultValue = '/';
    return (typeof props.separator === 'string') ? props.separator : defaultValue;
}