import * as React from 'react';

import Container from './../Container';

import {SidebarMainContainerProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export default function SidebarMainContainer(props: SidebarMainContainerProps) {
    return (
        <Container className={'sidebar-companion ' + props.className}
                   style={props.style}
                   {...props}>
            {props.children}
        </Container>
    );
};