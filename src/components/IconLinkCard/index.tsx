import * as React from 'react';

import Card from './../Card';
import CardBody from './../CardBody';

import Icon from './../Icon';

import CardFooter from './../CardFooter';
import Paragraph from './../Paragraph';

import {IconLinkCardProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export default function IconLinkCard(props: IconLinkCardProps) {
    let {
        onClick,
        icon,
        text,
        style,
        iconContainerStyle,
        iconColor,
        iconSize,
        className,
        backgroundColor,
        iconStyle,
        textContainerStyle,
        textStyle
    } = props;

    return (
        <Card className={'icon-link-card ' + className}
              style={style}
              onClick={onClick}>

            <CardBody className={'icon-container'}
                      style={{backgroundColor: backgroundColor || 'black', ...iconContainerStyle}}>

                <Icon icon={icon}
                      size={iconSize}
                      color={iconColor || 'white'}
                      style={iconStyle}/>

            </CardBody>

            <CardFooter style={textContainerStyle}>
                <Paragraph style={textStyle}>
                    {text}
                </Paragraph>
            </CardFooter>

        </Card>
    );
}