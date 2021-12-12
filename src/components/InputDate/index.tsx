import React, {ReactNode, useEffect, useState} from 'react';

import moment from 'moment';


//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export type InputDateProps = {
    className?: string,
    style?: React.CSSProperties,

    // innerRef?: React.LegacyRef<HTMLInputElement>,
    innerRef?: any,

    //When the input changes, this function will be called
    onChange?: (value) => void,

    //The value of the input
    value?: Date,

    autocomplete?: string,

    //If true, this will set the focus automatically when the input is loaded
    focus?: boolean,

    //The placeholder for the element
    placeholder?: string,

    //disables the input and prevents the user from entering any information
    disabled?: boolean,

    //Adds some error stylings to the input
    hasError?: boolean,

    //center the text inside the input
    textCenter?: boolean
};


type InternalDateConfig = {
    input: string,
    pretty: string,
    value?: Date | null,
    error?: string,
    hasError?: boolean,
    isEmpty?: boolean,
    isValid?: boolean,
}



export default function Index(props: InputDateProps) {
    let DATE_FORMAT = 'MM/DD/YYYY';

    let defaultDateObj: InternalDateConfig = {
        input: '',
        pretty: ''
    };

    let [dateObj, setDateObj] = useState(defaultDateObj);
    let [userHasJustMadeAChange, setUserHasJustMadeAChange] = useState(false);

    useEffect(() => {
        if (!userHasJustMadeAChange) {
            let newValueString = '';

            if (isDate(props.value, true)) {
                let propsValueMomentIsEmpty = (props.value === null || props.value === undefined);
                let propsValueMoment = propsValueMomentIsEmpty ? null : moment(props.value);

                if (!propsValueMomentIsEmpty && propsValueMoment?.isValid()) {
                    newValueString = propsValueMoment.format(DATE_FORMAT);
                }
            }

            let currentValueMomentIsEmpty = (dateObj?.value === null || dateObj?.value === undefined);
            let currentMoment = currentValueMomentIsEmpty ? null : moment(dateObj?.value);
            let currentValueString = !currentValueMomentIsEmpty && currentMoment && currentMoment.isValid() ? currentMoment.format(DATE_FORMAT) : '';

            if (newValueString !== currentValueString) {
                updateDateValue(newValueString);
            }
        } else {
            setUserHasJustMadeAChange(false);
        }
    }, [props.value]);



    const classes = getClasses(props);



    return (
        <>
            <input value={dateObj.input}
                   placeholder={props['placeholder']}
                   type={'text'}
                   style={{marginBottom: 5, ...props['style']}}
                   disabled={props['disabled']}
                   ref={props.innerRef}
                   autoComplete={props.autocomplete}
                   autoFocus={props['focus'] === true}
                   data-has-focus={!!props['focus']}
                   onKeyPress={(event) => {
                       if (event.key === 'Enter' && props['onEnter']) {
                           props['onEnter'](event);
                       }
                   }}
                   className={classes}
                   data-has-on-change={!!props['onChange']}
                   onChange={(event) => {
                       updateDateValue(event.target.value);
                   }}/>

            <p className={'paragraph-' + (dateObj.hasError ? 'error' : 'help')}
               style={{fontSize: '.75em', marginTop: '0px', paddingLeft: 5}}>
                {dateObj.error || dateObj.pretty}
            </p>
        </>
    );


    function getClasses(props) {
        return [
            'form-control',
            props.className,
            props.mode === 'plain' && 'input-plain',
            (props.hasError || dateObj.hasError) && 'has-error',
            props.textCenter && 'text-center'
        ].filter((value) => value).join(' ');
    }



    function updateDateValue(newInputValue) {
        const newDateObj: InternalDateConfig = {
            input: ('' + newInputValue),
            value: null,
            pretty: '',
            isEmpty: true,
            isValid: false,
            error: '',
            hasError: false
        };

        newDateObj.isEmpty = (newDateObj.input.length === 0);
        newDateObj.isValid = (!newDateObj.isEmpty && isDate(newInputValue, true));

        newDateObj.value = (newDateObj.isValid) ? new Date(newDateObj.input) : null;
        newDateObj.pretty = (newDateObj.isValid) ? moment(newDateObj.value).format('MMMM Do, YYYY') : '';

        if (!newDateObj.isEmpty && !newDateObj.isValid) {
            newDateObj.error = 'Invalid date format';
        }

        // @ts-ignore
        newDateObj.hasError = (newDateObj.error.length > 0);

        setUserHasJustMadeAChange(true);
        setDateObj(newDateObj);

        setTimeout(() => {
            if (props.onChange) {
                props.onChange(newDateObj.value);
            }
        }, 0);
    }



    function isDate(item, allowString) {
        const isNotInvalidType = (item !== undefined && item !== null && isNaN(item) && item !== false && item !== true && Array.isArray(item) === false);
        const stringAllowance = (allowString !== true) ? typeof item === 'string' : true;

        if (isNotInvalidType && stringAllowance) {
            if (allowString === true) {
                item = new Date(item);
            }

            return ((item instanceof Date) && (item.toString() !== 'Invalid Date'));

        } else {
            return false;
        }
    }
}
