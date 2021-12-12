import * as React from 'react';


import {Progress, ProgressBar} from '@waveortho/simple-components';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export type ProgressBarContainerProps = {
    height: number,
    value: number,

    color?: string,
    type?: string,
    animated?: boolean,
    striped?: boolean,
    showLabel?: boolean,

    className?: string,
    style?: React.CSSProperties,
}


export default function ProgressBarContainer(props: ProgressBarContainerProps) {
    return (
        <Progress height={props.height} className={props.className} style={props.style}>
            <ProgressBar value={props.value}
                         color={props.color}
                         type={props.type}
                         animated={props.animated}
                         striped={props.striped} showLabel={props.showLabel}/>
        </Progress>
    );
}