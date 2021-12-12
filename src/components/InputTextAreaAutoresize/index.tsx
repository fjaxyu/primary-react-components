import * as React from 'react';

import TextareaAutosize from 'react-textarea-autosize';
import {TypeService} from './../../services';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//



export type TextAreaAutoresizeProps = {
    className?: string | Array<string>,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    focus?: boolean,
    onChange?: (string, TextAreaProps, {value, event, props}) => void,
    onEnter?: (Record) => void,
    onCommandEnter?: (Record) => void,
    hasError?: boolean,
    disabled?: boolean,
    autocomplete?: string,
    autosize?: boolean,
    placeholder?: string,
    value?: string,
    rows?: number,
    textCenter?: boolean,
    mode?: 'plain' | string,
    maxRows?: number,
    minRows?: number,
    onHeightChange?: (height) => void,
    cacheMeasurements?: boolean,
}


export default function Index(props: TextAreaAutoresizeProps) {
    return (
        <TextareaAutosize {...getAutosizedAttributes()}/>
    );



    function getAutosizedAttributes() {
        return getStandardizedAttributes({
            maxRows: props.maxRows,
            minRows: props.minRows,
            onHeightChange: props.onHeightChange,
            cacheMeasurements: props.cacheMeasurements
        });
    }



    function getStandardizedAttributes(additionalAttributes?) {
        return {
            className: getClassNames(),
            style: props.style,
            value: props.value,
            autoComplete: props.autocomplete,
            rows: props.rows || 3,
            'data-has-on-change': !!props.onChange,
            placeholder: props.placeholder,
            disabled: props.disabled,
            onKeyPress: (event) => {
                let {onEnter, onCommandEnter} = props;

                let onEnterExists = onEnter && TypeService.isFunction(onEnter);
                let onCommandEnterExists = onCommandEnter && TypeService.isFunction(onCommandEnter);
                let onKeyPressFunctionExists = (onEnterExists || onCommandEnterExists);

                if (onKeyPressFunctionExists) {
                    let enterKeyWasPressed = (event?.key === 'Enter');

                    if (enterKeyWasPressed) {
                        let metaKeyWasPressed = (event?.metaKey === true);

                        if (metaKeyWasPressed && onCommandEnterExists) {
                            onCommandEnter && onCommandEnter(event);
                        } else if (onEnterExists) {
                            onEnter && onEnter(event);
                        }
                    }
                }
            },
            onChange: (event) => {
                if (props.onChange) {
                    const value = event.target.value;
                    props.onChange(value, props, {value, event, props});
                }
            },

            ...additionalAttributes
        };
    }



    function getClassNames() {
        const classNames = [
            'form-control'
        ];

        if (props.className) {
            classNames.push(props.className as string);
        }

        if (props.mode === 'plain') {
            classNames.push('input-plain');
        }

        if (props.hasError) {
            classNames.push('has-error');
        }

        if (props.textCenter === true) {
            classNames.push('text-center');
        }

        return classNames.join(' ');
    }

};