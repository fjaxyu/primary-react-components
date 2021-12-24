import * as React from 'react';

import Container from './../Container';

import {SidebarSideContainerProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export default function SidebarSideContainer(props: SidebarSideContainerProps) {
    const classes = getClasses();

    return (
        <Container className={classes}
                   style={props.style}
                   {...props}>
            {props.children}
        </Container>
    );


    function getClasses() {
        const classes = ['sidebar'];

        if (props.fixed === true) {
            classes.push('fixed');
        }

        if (props.card === true) {
            classes.push('card');
        }

        if (props.className) {
            classes.push(props.className);
        }

        return classes.join(' ');
    }

}