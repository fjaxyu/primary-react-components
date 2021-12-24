import * as React from 'react';

import {ProgressBarProps} from './types';

import ProgressBarContainer from './../ProgressBarContainer';
import ProgressBarProgress from './../ProgressBarProgress';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

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