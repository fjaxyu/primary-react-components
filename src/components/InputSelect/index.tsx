import * as React from 'react';
import {TypeService, UtilityService} from './../../services';

import {InputSelectProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//



export default function InputSelect(props: InputSelectProps) {
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





