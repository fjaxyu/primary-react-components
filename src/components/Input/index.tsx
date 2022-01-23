import * as React from 'react';


import InputText from './../InputText';

import InputSelect from './../InputSelect';
import {InputSelectOption} from '../InputSelect/types';

import InputRadio from './../InputRadio';
import {InputRadioOption} from '../InputRadio/types';

import InputNumber from './../InputNumber';
import InputDate from './../InputDate';
import InputCheckbox from './../InputCheckbox';
import Label from './../Label';
import InputTextArea from './../InputTextArea';
import InputTextAreaAutoresize from './../InputTextAreaAutoresize';
import Required from './../Required';
import FormGroup from './../FormGroup';
import Paragraph from './../Paragraph';
import Show from './../Show';
import Text from './../Text';

import {UtilityService} from './../../services';

import {InputProps} from './types';

const MODULE_CONSTANTS = {
    TYPE_MAP: {
        'text': 'text',
        'password': 'text',
        'email': 'text',
        'phone': 'text',
        'checkbox': 'checkbox',
        'select': 'select',
        'radio': 'radio',
        'textarea': 'textarea',
        'number': 'number',
        'date': 'date'
    }
};



//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//



export default React.forwardRef(function Input(props: InputProps, ref) {
    const formError = getFormError();
    const helpMessage = getFormHelpMessage();
    const inputItem = getInput();
    const messageLengthMessage = getMessageLengthMessage();

    let labelSize;

    if (props.labelSize) {
        labelSize = props.labelSize;
    } else if (props.mode === 'plain') {
        labelSize = 'sm';
    }

    let classNameList = [props.className];

    if (isCheckbox()) {
        classNameList.push('form-group-checkbox');
    }

    let classNames = classNameList.join(' ');

    return (
        <FormGroup className={classNames}
                   style={props.style}
                   mode={props.mode}>
            <Label size={labelSize} style={props.labelStyle}>
                {props.label}

                {props.required === true ? <Required/> : null}
            </Label>
            {inputItem}
            {helpMessage}
            {messageLengthMessage}
            {formError}
        </FormGroup>
    );


    function getInput() {
        const inputStyle = {marginBottom: 0, ...props.inputStyle};

        const mappedType = getMappedType();

        if (mappedType === 'text') {
            return (
                <InputText onChange={props.onChange}
                           focus={props.focus}
                           style={inputStyle}
                           innerRef={ref}
                           mode={props.mode}
                           autocomplete={props.autocomplete}
                           type={props.type}
                           textCenter={props.textCenter}
                           hasError={!!props.errorMessage}
                           onEnter={props.onEnter}
                           disabled={props.disabled}
                           placeholder={props.placeholder}
                           value={props.value as string}/>
            );
        } else if (mappedType === 'number') {
            return (
                <InputNumber onChange={props.onChange}
                             innerRef={ref}
                             focus={props.focus}
                             mode={props.mode}
                             autocomplete={props.autocomplete}
                             style={inputStyle}
                             hasError={!!props.errorMessage}
                             disabled={props.disabled}
                             value={props.value as number}/>
            );
        } else if (mappedType === 'date') {
            return (
                <InputDate onChange={props.onChange}
                           focus={props.focus}
                           style={inputStyle}
                           autocomplete={props.autocomplete}
                           hasError={!!props.errorMessage}
                           disabled={props.disabled}
                           value={props.value as Date}
                           innerRef={ref}/>
            );
        } else if (mappedType === 'checkbox') {
            return (
                <InputCheckbox onChange={props.onChange}
                               innerRef={ref}
                               focus={props.focus}
                               style={inputStyle}
                               hasError={!!props.errorMessage}
                               disabled={props.disabled}
                               value={props.value as boolean}/>
            );
        } else if (mappedType === 'select') {
            return (
                <InputSelect onChange={props.onChange}
                             innerRef={ref}
                             focus={props.focus}
                             mode={props.mode}
                             style={inputStyle}
                             hasError={!!props.errorMessage}
                             disabled={props.disabled}
                             value={props.value as (string | boolean | number | Record<any, unknown> | any[])}
                             options={props.options as InputSelectOption[]}/>
            );
        } else if (mappedType === 'radio') {
            return (
                <InputRadio onChange={props.onChange}
                            focus={props.focus}
                            style={inputStyle}
                            innerRef={ref}
                            name={props.name as string}
                            hasError={!!props.errorMessage}
                            disabled={props.disabled}
                            value={props.value as string | number | boolean}
                            options={props.options as InputRadioOption[]}/>
            );
        } else if (mappedType === 'textarea') {
            let ComponentName = (props.autoresize === true) ? InputTextAreaAutoresize : InputTextArea;

            return (
                <ComponentName onChange={props.onChange}
                               onEnter={props.onEnter}
                               onCommandEnter={props.onCommandEnter}
                               focus={props.focus}
                               style={inputStyle}
                               mode={props.mode}
                               maxRows={props.maxRows}
                               minRows={props.minRows}
                               onHeightChange={props.onHeightChange}
                               cacheMeasurements={props.cacheMeasurements}
                               rows={props.rows}
                               autocomplete={props.autocomplete}
                               ref={ref}
                               hasError={!!props.errorMessage}
                               disabled={props.disabled}
                               placeholder={props.placeholder}
                               value={props.value as string}
                               textCenter={props.textCenter}/>
            );
        }
    }



    function getFormError() {
        if (props.errorMessage) {
            return (
                <Paragraph type={'error'} className={'error-message'}>{props.errorMessage}</Paragraph>
            );
        } else {
            return '';
        }
    }



    function getMessageLengthMessage() {
        let {showMessageLength, value, maxMessageLength} = props;
        let validMappedTypes = ['text', 'textarea'];

        if (showMessageLength && validMappedTypes.includes(getMappedType())) {
            let messageLength = UtilityService.validateItem(value, 'string', '').length || 0;
            let maxMessageLengthShouldBeShown = !!(maxMessageLength && maxMessageLength > 0);

            // @ts-ignore
            let messageLengthExceedsMax = (maxMessageLengthShouldBeShown && messageLength > maxMessageLength);

            return (
                <Paragraph type={messageLengthExceedsMax ? 'error' : 'help'} style={{fontSize: '.85em'}}>
                    <Text>
                        {messageLength}
                    </Text> <Show show={maxMessageLengthShouldBeShown}>
                    <Text>
                        of {maxMessageLength}
                    </Text>
                </Show> <Text>
                    character{UtilityService.pluralityQualifier(messageLength, 's')}
                </Text>
                </Paragraph>
            );
        }
    }



    function getMappedType() {
        const type = props.type;
        const validTypes = Object.keys(MODULE_CONSTANTS.TYPE_MAP);
        const isValidType = validTypes.includes(type);
        const defaultMappedType = 'text';

        return (isValidType) ? MODULE_CONSTANTS.TYPE_MAP[type] : defaultMappedType;
    }


    function isCheckbox() {
        return getMappedType() === 'checkbox';
    }



    function getFormHelpMessage() {
        if (props.helpMessage) {
            return (
                <Paragraph type={'help'} className={'help-message'}>{props.helpMessage}</Paragraph>
            );
        } else {
            return '';
        }
    }


});