import * as React from 'react';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export type ListItemProps = {
    className?: string,
    style?: React.CSSProperties,
    onClick?: () => void
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
};


export default function Index(props: ListItemProps) {
    const classNames = getClassNames(props);

    return (
        <li
            className={classNames}
            style={props.style}
            data-has-on-click={!!props.onClick}
            onClick={props.onClick}
            ref={props.innerRef}>
            {props.children}
        </li>
    );
};



function getClassNames(props) {
    const classNames = [] as String[];

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}