import * as React from 'react';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export type TableDataProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    colSpan?: number,
    colspan?: number,
    align?: 'left' | 'center' | 'right'
};

export default function Index(props: TableDataProps) {
    const classNames = getClassNames(props);

    return (
        <td
            className={classNames}
            style={props.style}
            colSpan={props.colSpan || props.colspan}
            ref={props.innerRef}>
            {props.children}
        </td>
    );
};



function getClassNames(props) {
    let classNames = ['table-data'];

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