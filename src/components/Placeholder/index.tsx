import * as React from 'react';

import {TypeService} from '@waveortho/services';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export type PlaceholderProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    title?: boolean,
    block?: boolean,
    inline?: boolean,
}


export default function Index(props: PlaceholderProps) {
    const tempProps = {...props};

    const classes = getClassNames(props);
    const style = getStyle(props);

    if (TypeService.isBoolean(tempProps.title)) {
        delete tempProps.title;
    }

    if (TypeService.isBoolean(tempProps.block)) {
        delete tempProps.block;
    }

    if (TypeService.isBoolean(tempProps.inline)) {
        delete tempProps.inline;
    }

    return (
        <p style={style} className={classes}/>
    );



    function getClassNames(props) {
        let classNames = [
            'placeholder'
        ];

        if (props.block === true) {
            classNames.push('display-block');
        }

        if (props.inline === true) {
            classNames.push('display-inline-block');
        }

        if (props.paragraph === true) {
            classNames.push('paragraph');
        }

        if (props.title === true) {
            classNames.push('title');
        }

        if (props.className) {
            classNames.push(props.className);
        }

        return classNames.join(' ');
    }



    function getStyle(props) {
        let defaultStyle = {
            width: '10rem'
        };

        if (props.width) {
            defaultStyle.width = props.width;
        }

        return {...defaultStyle, ...props.style};
    }
}


