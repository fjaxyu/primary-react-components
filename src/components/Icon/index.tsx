import * as React from 'react';

import {FontAwesomeIcon, FontAwesomeIconProps} from '@fortawesome/react-fontawesome';
import {SizeProp} from '@fortawesome/fontawesome-svg-core';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export type  IconProps = FontAwesomeIconProps & {
    icon: string,
    size?: SizeProp,

    className?: string,
    style?: React.CSSProperties,
    noPosition?: boolean,
}


export default function Index(props: IconProps) {
    let itemProps = {...props, icon: props.icon};

    itemProps.className = (typeof itemProps.className === 'string') ? itemProps.className : '';
    itemProps.className = 'icon ' + itemProps.className;

    delete itemProps.noPosition;

    return (
        <FontAwesomeIcon {...itemProps} icon={props.icon}/>
    );
};