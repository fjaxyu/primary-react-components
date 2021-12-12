import * as React from 'react';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export type FormGroupProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    mode?: 'plain'
}



const Index = (props: FormGroupProps) => {
    const classNames = getClassNames(props);

    return (
        <div className={classNames} style={props.style} ref={props.innerRef}>
            {props.children}
        </div>
    );
};
export default Index;



function getClassNames(props) {
    const classNames = [
        'form-group'
    ];

    if (props.mode === 'plain') {
        classNames.push('form-group-plain');
    }

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}