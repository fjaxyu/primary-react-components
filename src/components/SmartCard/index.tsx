import * as React from 'react';

import {Card, CardFooter, CardHeader, Link, CardIcon, CardImage, CardBody} from '@waveortho/simple-components';
import {TypeService} from '@waveortho/services';

import {CardProps} from '@waveortho/simple-components/dist/src/Card';
import {SizeProp} from '@fortawesome/fontawesome-svg-core';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export type SmartCardProps = {
    href?: () => void,
    onClick?: () => void,
    className?: string,

    style?: React.CSSProperties,
    headerStyle?: React.CSSProperties,
    footerStyle?: React.CSSProperties,
    bodyStyle?: React.CSSProperties,
    iconStyle?: React.CSSProperties,

    shadow?: CardProps['shadow'],
    position?: 'top' | 'bottom' | 'both',
    header?: string | React.ReactNode,
    footer?: string | React.ReactNode,
    children?: string | React.ReactNode,
    src?: string,
    iconSrc?: string,
    icon?: string,
    iconColor?: string,
    iconSize?: SizeProp,
    iconBackground?: string,
}



export default function Index(props: SmartCardProps) {
    const GeneratedCard = getCard();
    const isLink = !!props.href;


    if (isLink) {
        return (
            <Link href={props.href} notHref={true}>
                {GeneratedCard}
            </Link>
        );
    } else {
        return GeneratedCard;
    }



    function getCard() {
        const image = getImage();
        const header = getHeader();
        const footer = getFooter();
        const body = getBody();
        const imagePosition = getImagePosition();

        const isClickable = (!!props.href || TypeService.isFunction(props.onClick));

        let topImage, bottomImage;

        if (imagePosition === 'top' || imagePosition === 'both') {
            topImage = image;
        } else if (imagePosition === 'bottom') {
            bottomImage = image;
        }

        return (
            <Card className={'smart-card ' + props.className}
                  onClick={props.onClick}
                  style={props.style}
                  isClickable={isClickable}
                  shadow={props.shadow}>
                {header}
                {topImage}
                {body}
                {bottomImage}
                {footer}
            </Card>
        );
    }



    function getImagePosition() {
        const validPositions = [
            'top',
            'bottom',
            'both'
        ];

        if (cardOnlyHasImage()) {
            return 'both';
        } else {
            return (props.position && validPositions.includes(props.position)) ? props.position : validPositions[0];
        }

    }


    function getHeader() {
        if (props.header) {
            return (
                <CardHeader style={props.headerStyle}>{props.header}</CardHeader>
            );
        } else {
            return '';
        }
    }


    function getFooter() {
        if (props.footer) {
            return (
                <CardFooter style={props.footerStyle}>{props.footer}</CardFooter>
            );
        } else {
            return '';
        }
    }


    function cardOnlyHasImage() {
        return (!props.footer && !props.header && !props.children && !!props.src);
    }



    function getImage() {
        const imagePosition = getImagePosition();

        const isAtVeryTop = !props.header && imagePosition === 'top';
        const isAtVeryBottom = !props.footer && imagePosition === 'bottom';
        const isOnlyElement = !props.header && !props.footer && !props.children;
        const hasNoPosition = !isAtVeryTop && !isAtVeryBottom && !isOnlyElement;

        if (props.src) {
            return (
                <CardImage src={props.src}
                           style={props.iconStyle}
                           position={imagePosition as SmartCardProps['position']}
                           noPosition={hasNoPosition}/>
            );
        } else if (props.iconSrc || props.icon) {
            return (
                <CardIcon src={props.iconSrc}
                          icon={props.icon as string}
                          style={props.iconStyle}
                          size={props.iconSize || '6x'}
                          position={imagePosition as SmartCardProps['position']}
                          background={props.iconBackground}
                          color={props.iconColor}
                          noPosition={hasNoPosition}/>
            );
        } else {
            return '';
        }
    }


    function getBody() {
        if (props.children) {
            return (
                <CardBody style={props.bodyStyle}>
                    {props.children}
                </CardBody>
            );
        } else {
            return '';
        }
    }

};



