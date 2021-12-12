import * as React from 'react';


import Media from './../Media';
import MediaBody from './../MediaBody';
import MediaImage from './../MediaImage';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export type MediaItemProps = {
    className: string,
    style?: React.CSSProperties,
    border?: boolean,
    borderBottom?: boolean,
    src: string,
    position?: string,
    children: React.ReactNode,
};


export default function Index(props: MediaItemProps) {
    const {className, style, border, borderBottom, src, position, children} = props;

    return (
        <Media className={className}
               style={style}
               border={border}
               borderBottom={borderBottom}>

            <MediaImage src={src}
                        position={position}/>

            <MediaBody>
                {children}
            </MediaBody>
        </Media>
    );
};