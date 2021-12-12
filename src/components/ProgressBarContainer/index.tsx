import * as React from 'react';


//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export type ProgressBarContainerProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    height?: number,
}



export default function ProgressBarContainer(props: ProgressBarContainerProps) {
    const classNames = getClassNames(props);
    const style = getStyle(props);

    return (
        <div className={classNames} style={{...style, ...props.style}} ref={props.innerRef}>
            {props.children}
        </div>
    );
};



function getClassNames(props) {
    const classNames = [
        'progress'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}


function getStyle(props) {
    const style = {};

    if (props.height) {
        let heightValue = props.height;

        const defaultEnding = 'px';
        const hasEnding = isNaN(heightValue[heightValue.length - 1]) === true;

        if (hasEnding === false) {
            heightValue = heightValue + defaultEnding;
        }

        style['height'] = heightValue;
    }

    return style;
}