import * as React from 'react'

import {ImageProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

const Index = (props: ImageProps) => {
    const classNames = getClassNames(props);

    return (
        <img
             id={props.id}
             title={props.title}
             src={props.src}
             alt={props.alt || ''}
             ref={props.innerRef}
             onClick={() => {
                 if (props.onClick) {
                     props.onClick();
                 }
             }}
             className={classNames}
             style={props.style}/>
    );
};

export default Index;


//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//
//PRIVATE METHODS

function getClassNames(props) {
    let classNames = [] as String[];

    if (props.className) {
        classNames.push(props.className);
    }

    if (props.onClick) {
        classNames.push('has-click');
    }

    if (props.onClick && props.clickHover) {
        classNames.push('click-hover');
    }

    return classNames.join(' ');
}