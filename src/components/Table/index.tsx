import * as React from 'react';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export type TableProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    striped?: boolean,
    hover?: boolean,
    bordered?: boolean,
    small?: boolean,
    responsive?: boolean,
    'responsive-sm'?: boolean,
    'responsive-md'?: boolean,
    'responsive-lg'?: boolean,
    'responsive-xl'?: boolean,
};


export default function Index(props: TableProps) {
    const classNames = getClassNames(props);

    return (
        <table className={classNames} style={props.style} ref={props.innerRef}>
            {props.children}
        </table>
    );
};



function getClassNames(props) {
    const classNames = [
        'table'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    if (props.striped === true) {
        classNames.push('table-striped');
    }

    if (props.hover === true) {
        classNames.push('table-hover');
    }

    if (props.bordered === true) {
        classNames.push('table-bordered');
    }

    if (props.small === true) {
        classNames.push('table-sm');
    }

    if (props.responsive === true) {
        classNames.push('table-responsive');
    }

    if (props['responsive-sm'] === true) {
        classNames.push('table-responsive-sm');
    }

    if (props['responsive-md'] === true) {
        classNames.push('table-responsive-md');
    }

    if (props['responsive-lg'] === true) {
        classNames.push('table-responsive-lg');
    }

    if (props['responsive-xl'] === true) {
        classNames.push('table-responsive-xl');
    }

    return classNames.join(' ');
}