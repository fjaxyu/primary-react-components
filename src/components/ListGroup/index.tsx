import * as React from 'react';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export type ListGroupProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
};


const Index = (props: ListGroupProps) => {
    const classNames = getClassNames(props);

    return (
        <ul className={classNames} style={props.style} ref={props.innerRef}>
            {props.children}
        </ul>
    );
};
export default Index;



function getClassNames(props) {
    const classNames = [
        'list-group'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}