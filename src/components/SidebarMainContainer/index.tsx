import * as React from 'react';

import {Container} from '@waveortho/simple-components';
import {ContainerProps} from '@waveortho/simple-components/dist/src/Container';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export type SidebarCompanionProps = ContainerProps & {
    className?: string
    children: React.ReactNode,
    style?: React.CSSProperties,
};



export default function SidbarMainContainer(props: SidebarCompanionProps) {
    return (
        <Container className={'sidebar-companion ' + props.className}
                   style={props.style}
                   {...props}>
            {props.children}
        </Container>
    );
};