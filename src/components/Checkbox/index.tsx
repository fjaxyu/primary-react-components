import * as React from 'react';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export type CheckboxTypes = {
    className?: string | Array<string>,
    style?: React.CSSProperties,
    children?: React.ReactNode,
};



export default function Index(props: CheckboxTypes) {
    const classNames = getClassNames(props);

    return (
        <input type={'checkbox'}
               className={classNames}
               style={props.style}/>
    );
};



function getClassNames(props) {
    let classNames = [
        'checkbox'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}