import * as React from 'react';

import Link from './../Link';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export type BreadcrumbItemProps = {
    onClick?: () => void,
    href: () => void,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    active?: boolean
}

export default function Index(props: BreadcrumbItemProps) {
    const classNames = getClassNames(props);

    return (
        <Link className={classNames}
              style={props.style}
              onClick={props.onClick}
              href={props.href}>
            {props.children}
        </Link>
    );
};



function getClassNames(props) {
    const classNames = [
        'breadcrumb-item'
    ];

    if (props.active === true) {
        classNames.push('active');
    }

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}