import * as React from 'react';
import {TypeService} from '@waveortho/services';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export type Option = {
    value: string,
    text: string,
    className?: string
}

export type InputRadioProps = {
    children?: React.ReactNode,
    style?: React.CSSProperties,
    className?: string | Array<string>,
    name: string,

    options: Option[],
    onChange: (string, OptionType) => void,
    focus?: boolean,

    hasError?: boolean,
    disabled?: boolean,
    title?: string,
    value?: string | number | boolean,
    id?: string,
    ref?: any,
    innerRef?: any
}



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