import * as React from 'react';
import {TypeService, UtilityService} from '@waveortho/services';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export type Option = {
    value: string,
    text: string
}

export type InputSelectProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,

    //When the input changes, this function will be called
    onChange?: (string, InputSelectProps, {value, event, props}) => void,

    //The list of possible radio options that the user can select from
    options?: Option[],

    //The value of the input
    value: string | boolean | number | Record<any, unknown> | any[],

    //If true, this will set the focus automatically when the input is loaded
    focus?: boolean,

    //disables the input and prevents the user from entering any information
    disabled?: boolean,

    //Adds some error stylings to the input
    hasError?: boolean,

    innerRef?: any,

    mode?: string
};



export default function Index(props: InputSelectProps) {
    const classNames = getClasses(props);
    const selectOptions = getSelectOptions(props);

    return (
        <select
            className={classNames}
            disabled={props.disabled}
            style={props.style}
            value={props.value as string}
            ref={props.innerRef}
            onChange={(event) => {
                if (props.onChange) {
                    let value = event.target.value;

                    if (UtilityService.isJson(value)) {
                        value = JSON.parse(value);
                    }

                    props.onChange(value, props, {value, event, props});
                }
            }}>
            {selectOptions}
        </select>
    );


    function getClasses(props) {
        const classNames = [
            'form-control'
        ];

        if (props.className) {
            classNames.push(props.className);
        }

        if (props.mode === 'plain') {
            classNames.push('input-plain');
        }

        if (props.hasError) {
            classNames.push('has-error');
        }

        return classNames.join(' ');
    }



    function getSelectOptions(props) {
        const {options} = props;

        return options.map(({value, text}, index) => {
            const valueIsJson = (TypeService.isArray(value) || TypeService.isObject(value));
            value = (valueIsJson) ? JSON.stringify(value) : value;

            return (
                <option value={value} key={`${index}`}>
                    {text}
                </option>
            );
        });
    }
}





