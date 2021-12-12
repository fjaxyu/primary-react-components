import * as React from 'react';


//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export type BoxProps = {
    className?: string | Array<string>,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    shadow?: boolean | 1 | 2 | 3 | 4 | 5,
    title?: string,
    onClick?: () => void,
    onMouseOver?: any,
    onMouseEnter?: any,
    onMouseLeave?: any,
    id?: string
}

export default React.forwardRef(function Box(props: BoxProps, ref) {
    const classNames = getClassNames(props);

    return (
        <div
             id={props.id}
             className={classNames}
             style={props.style}
             title={props.title}
             onMouseOver={props.onMouseOver}
             onMouseEnter={props.onMouseEnter}
             onMouseLeave={props.onMouseLeave}
             onClick={() => {
                 if (props.onClick) {
                     props.onClick();
                 }
             }}
            // @ts-ignore
             ref={ref}>
            {props.children}
        </div>
    );
});



function getClassNames(props) {
    const classNames = [
        'box'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    if (props.shadow === true) {
        classNames.push('box-shadow');
    } else if (Number.isInteger(props.shadow) && props.shadow > 0 && props.shadow <= 5) {
        classNames.push('box-shadow-' + props.shadow);
    }

    return classNames.join(' ');
}