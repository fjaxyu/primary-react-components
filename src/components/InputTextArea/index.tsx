import * as React from 'react';

import {ForwardedRef} from 'react';

import {TypeService} from './../../services';

import {TextAreaProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export default React.forwardRef(function TextArea(props: TextAreaProps, ref: ForwardedRef<any>) {
    let COMMAND_KEY_IS_PRESSED = false;

    return (
        <textarea {...getStandardAttributes()}/>
    );



    function getStandardAttributes() {
        return getStandardizedAttributes({
            ref: ref
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

});