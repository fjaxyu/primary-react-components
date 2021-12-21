import * as React from 'react';

import {LinkProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export default function LinkProps(props: LinkProps) {
    const classNames = getClassNames(props);

    if (props.notHref) {
        return (
            <span onClick={() => {
                if (!props.disabled) {
                    linkClicked(props);
                }
            }}
                  title={props.title}
                  className={classNames}
                  data-has-on-click={!!props.href || !!props.onClick}
                  ref={props.innerRef}>
                {props.children}
            </span>
        );
    } else {
        return (
            <a className={classNames}
               style={props.style}
               title={props.title}
               ref={props.innerRef}
               onClick={() => {
                   if (!props.disabled) {
                       linkClicked(props);
                   }
               }}>
                {props.children}
            </a>
        );
    }
};


//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//
//PUBLIC METHODS

function linkClicked(props) {
    const {href, onClick} = props;

    if (typeof href === 'string') {
        throw new Error('href is now required to be a function instead of a url');
    } else if (href) {
        href();
    } else if (onClick) {
        onClick();
    }
}



function getClassNames(props) {
    const classNames = [
        'link'
    ];

    if (props.textCenter === true) {
        classNames.push('display-block text-center');
    }

    if (props.className) {
        classNames.push(props.className);
    }

    if (props.notHref) {
        classNames.push('no-href');
    } else {
        classNames.push('clickable');
    }

    if (props.disabled) {
        classNames.push('disabled');
    }

    return classNames.join(' ');
}