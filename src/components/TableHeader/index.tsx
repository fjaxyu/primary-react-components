import * as React from 'react';


//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export type TableHeaderProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    align?: 'left' | 'center' | 'right'
};



export default function Index(props: TableHeaderProps) {
    const classNames = getClassNames(props);

    return (
        <th className={classNames} style={props.style} ref={props.innerRef}>
            {props.children}
        </th>
    );
};



function getClassNames(props) {
    let classNames = ['th'];

    if (props.className) {
        classNames.push(props.className);
    }

    const validTextAlignPositions = ['left', 'right', 'center'];
    let alignPropValue = (props.align || props.textAlign || '').toLowerCase();

    if (validTextAlignPositions.includes(alignPropValue)) {
        classNames.push('text-' + alignPropValue);
    }

    return classNames.join(' ');
}