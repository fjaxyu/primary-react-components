import * as React from 'react';

import {Paragraph, Label, Link, Show, Text, Box} from '@waveortho/simple-components';

import Placeholder from './Placeholder';

const CONSTANTS = {
    VALID_SIZES: ['sm']
};

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export type LabelValueProps = {
    label: string | number | React.ReactNode,
    value: string | number | React.ReactNode,

    style?: React.CSSProperties,
    size?: 'sm',
    className?: string,

    labelStyle?: React.CSSProperties,
    labelLink?: () => void,
    labelClick?: () => void,
    labelLoading?: boolean,


    valueStyle?: React.CSSProperties,
    valueLink?: () => void,
    valueClick?: () => void,
    valueLoading?: boolean,
};



export default function Index(props: LabelValueProps) {
    const className = getClassName();
    const labelValue = getLabelValue();
    const valueContents = getValueContents();

    return (
        <Box className={className} style={props.style}>
            {labelValue}
            {valueContents}
        </Box>
    );

    function getClassName() {
        let classes = ['label-value-container'];

        if (props.size && CONSTANTS.VALID_SIZES.includes(props.size)) {
            classes.push('size-' + props.size);
        }

        if (props.className) {
            classes.push(props.className);
        }

        return classes.join(' ');
    }


    function getValueContents() {
        const {valueLink, valueClick, valueStyle, value, valueLoading} = props;

        const valueIsClickable = !!(valueLink || valueClick);

        let valueClassName = 'value';

        if (valueIsClickable) {
            valueClassName = valueClassName + ' text-link';
        }

        if (valueLoading) {
            return (
                <Placeholder className={valueClassName} block style={valueStyle}/>
            );
        } else if (valueLink) {
            return (
                <Paragraph className={valueClassName} style={valueStyle}>
                    <Link href={valueLink}>
                        {value}
                    </Link>
                </Paragraph>
            );
        } else if (React.isValidElement(value)) {
            return value;
        } else {
            return (
                <Paragraph className={valueClassName} style={valueStyle} onClick={valueClick}>
                    {value}
                </Paragraph>
            );
        }
    }


    function getLabelValue() {
        const {labelLink, labelClick, label, labelLoading, labelStyle} = props;

        const labelIsClickable = !!(labelLink || labelClick);

        let labelClassName = 'label';

        if (labelIsClickable) {
            labelClassName = labelClassName + ' text-link';
        }

        if (labelLoading) {
            return (
                <Placeholder className={labelClassName} block style={labelStyle}/>
            );
        } else if (labelLink) {
            return (
                <Label className={labelClassName} style={labelStyle}>
                    <Link href={labelLink}>
                        {label}
                    </Link>
                </Label>
            );
        } else if (labelClick) {
            return (
                <Label className={labelClassName} style={labelStyle}>
                    <Link onClick={labelClick}>
                        {label}
                    </Link>
                </Label>
            );
        } else if (React.isValidElement(label)) {
            return label;
        } else {
            return (
                <Label className={labelClassName} style={labelStyle}>
                    {label}
                </Label>
            );
        }
    }
}