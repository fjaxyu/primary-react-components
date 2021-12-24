import * as React from 'react';

import {MediaItemProps} from './types';

import MediaContainer from './../MediaContainer';
import MediaBody from './../MediaBody';
import MediaImage from './../MediaImage';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function MediaItem(props: MediaItemProps) {
    const {className, style, border, borderBottom, src, position, children} = props;

    return (
        <MediaContainer className={className}
                        style={style}
                        border={border}
                        borderBottom={borderBottom}>

            <MediaImage src={src}
                        position={position}/>

            <MediaBody>
                {children}
            </MediaBody>
        </MediaContainer>
    );
};