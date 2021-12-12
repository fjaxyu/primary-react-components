import * as React from 'react';

import SimpleComponents from '@waveortho/simple-components';
const {Card, CardBody, Icon, CardFooter, Paragraph} = SimpleComponents;

import {IconProps} from '@waveortho/simple-components/dist/src/Icon';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export type IconCardLinkProps = {
    onClick: () => void,
    icon: IconProps['icon'],
    backgroundColor: string,
    text: string,
    className?: string,
    iconColor?: IconProps['color'],
    iconStyle?: IconProps['style'],
    iconSize?: IconProps['size'],
    style?: React.CSSProperties,
    iconContainerStyle?: React.CSSProperties,
    textContainerStyle?: React.CSSProperties,
    textStyle?: React.CSSProperties,
};


export default function Index(props: IconCardLinkProps) {
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