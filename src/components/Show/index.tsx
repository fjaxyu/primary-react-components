import * as React from 'react';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export type ShowProps = {
    show: boolean,
    children?: React.ReactNode | React.ReactNodeArray,
}


export default function Index(props: ShowProps) {
    return (
        <React.Fragment>
            {(props.show === true) ? props.children : undefined}
        </React.Fragment>
    );
};