import * as React from 'react';

import {ShowProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export default function Index(props: ShowProps) {
    return (
        <React.Fragment>
            {(props.show === true) ? props.children : undefined}
        </React.Fragment>
    );
};