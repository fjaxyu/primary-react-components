import * as React from 'react';

const CONSTANTS = {
    VALID_SIZES: {
        'sm': 'sm',
        'small': 'sm',
        'lg': 'lg',
        'large': 'lg'
    }
};

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


const TS_VALID_SIZES = [...Object.keys(CONSTANTS.VALID_SIZES)] as const;

export type ContainerProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    id?: string,
    size?: typeof TS_VALID_SIZES | string,
    centerContent?: boolean,
    inline?: boolean,
    flex?: boolean,
    mode?: 'sidebar'
}

export default React.forwardRef(function (props: ContainerProps, ref) {
    const classNames = getClassNames(props);

    return (
        // @ts-ignore
        <div id={props.id} className={classNames} style={props.style} ref={ref}>
            {props.children}
        </div>
    );
});



function getClassNames(props) {
    const classNames = [
        'container'
    ];

    classNames.push(getSize(props));

    if (props.centerContent === true) {
        classNames.push('center-content');
    }

    if (props.inline === true) {
        classNames.push('inline');
    }

    if (props.flex === true) {
        classNames.push('flex');
    }

    if (props.mode === 'sidebar') {
        classNames.push('sidebar-container');
    }

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}



function getSize(props) {
    const propSize = props.size;

    const validSizes = CONSTANTS.VALID_SIZES;

    return (validSizes[propSize]) ? `container-${validSizes[propSize]}` : '';
}