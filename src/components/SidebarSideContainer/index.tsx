import * as React from 'react';

import Container, {ContainerProps} from './../Container';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export type SidebarProps = ContainerProps &  {
    className?: string,
    children?: React.ReactNode,
    fixed?: boolean,
    card?: boolean,
    style?: React.CSSProperties,
};


export default function SidebarSideContainer(props: SidebarProps) {
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