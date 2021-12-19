import * as React from 'react';

import {FontAwesomeIcon, FontAwesomeIconProps} from '@fortawesome/react-fontawesome';

import {IconProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export default function Icon(props: IconProps) {
    let itemProps = {...props, icon: props.icon};

    itemProps.className = (typeof itemProps.className === 'string') ? itemProps.className : '';
    itemProps.className = 'icon ' + itemProps.className;

    delete itemProps.noPosition;

    return (
        <FontAwesomeIcon {...itemProps} icon={props.icon}/>
    );
};