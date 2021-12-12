import * as React from 'react';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export type OrderedListProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
}



export default function Index(props: OrderedListProps) {
    const classNames = getClassNames(props);

    return (
        <ol className={classNames} style={props.style} ref={props.innerRef}>
            {props.children}
        </ol>
    );
};



function getClassNames(props) {
    const classNames = [
        'list',
        'ordered-list'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    if (props.type === 'help') {
        classNames.push('help');
    }

    return classNames.join(' ');
}