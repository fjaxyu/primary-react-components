import * as React from 'react';


import ProgressBarContainer from './../ProgressBarContainer';
import ProgressBarProgress from './../ProgressBarProgress';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export type ProgressBarProps = {
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


export default function ProgressBar(props: ProgressBarProps) {
    return (
        <ProgressBarContainer height={props.height} className={props.className} style={props.style}>
            <ProgressBarProgress value={props.value}
                                 color={props.color}
                                 type={props.type}
                                 animated={props.animated}
                                 striped={props.striped} showLabel={props.showLabel}/>
        </ProgressBarContainer>
    );
}