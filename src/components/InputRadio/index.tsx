import * as React from 'react';

import {InputRadioProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//



export default function Index(props: InputRadioProps) {
    const radioInputs = getRadioInputs(props);

    return (
        <React.Fragment>
            {radioInputs}
        </React.Fragment>
    );
}



function getRadioInputs(props) {
    const options = props.options;
    const selectedValue = props.value;
    const name = props.name;

    return options.map((option, index) => {
        const {value, text, className} = option;
        const isChecked = (selectedValue === value);

        return (
            <div className={'form-check ' + className} key={`${index}-${value}`}>
                <input name={name}
                       type={'radio'}
                       checked={isChecked}
                       className={'form-check-input'}
                       disabled={!!props.disabled}
                       onChange={() => {
                           if (props.onChange) {
                               props.onChange(value, option);
                           }
                       }}/>
                <label className={'form-check-label'}>{text}</label>
            </div>
        );
    });
}