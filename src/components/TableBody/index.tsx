import * as React from 'react';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export type TableBodyProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
}


export default function Index(props: TableBodyProps) {
    const classNames = getClassNames(props);

    return (
        <tbody className={classNames}
               style={props.style}
               {...props}
               ref={props.innerRef}>
            {props.children}
        </tbody>
    );
};



function getClassNames(props) {
    const classNames = [
        'table-body'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}