import * as React from 'react';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export type MediaProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    border?: boolean,
    withBorder?: boolean,
    borderBottom?: boolean,
    bordered?: boolean,
}


export default function Index(props: MediaProps) {
    const classNames = getClassNames(props);

    return (
        <div className={classNames} style={props.style} ref={props.innerRef}>
            {props.children}
        </div>
    );
};



function getClassNames(props) {
    const classNames = [
        'media'
    ];

    if ([props.border, props.withBorder, props.borderBottom, props.bordered].includes(true)) {
        classNames.push('media-border-bottom');
    }

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}