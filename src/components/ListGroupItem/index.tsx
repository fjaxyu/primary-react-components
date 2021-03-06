import * as React from 'react';

import {ListGroupItemProps} from './types';

import ListItem from './../ListItem';
import Badge from './../Badge';
import Button from './../Button';

import {TypeService} from './../../services';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export default function ListGroupItem(props: ListGroupItemProps) {
    const classNames = getClassNames(props);
    const badge = getBadge(props);
    const style = getStyle(props);
    const Tag = getTag(props);

    return (
        <Tag className={classNames}
             style={{...style, ...props.style}}
             data-has-on-click={!!props.onClick}
             noDefaultType={isClickable(props) && !overrideDefaultType(props)}>

            {props.children}

            {badge}

        </Tag>
    );



    function getTag(props) {
        return (isClickable(props)) ? Button : ListItem;
    }


    function overrideDefaultType(props) {
        return (!!props.type || !!props.color);
    }


    function getClassNames(props) {
        const classNames = [
            'list-group-item'
        ];

        if (isClickable(props)) {
            classNames.push('list-group-item-action');
        }

        if (props.active === true) {
            classNames.push('active');
        }

        if (props.className) {
            classNames.push(props.className);
        }

        return classNames.join(' ');
    }


    function isClickable(props) {
        return TypeService.isFunction(props.onClick);
    }


    function getStyle(props) {
        const style = {};

        if (badgeValueExists(props)) {
            style['display'] = 'flex';
            style['justifyContent'] = 'space-between';
            style['alignItems'] = 'center';
        }

        return style;
    }


    function badgeValueExists(props) {
        return (TypeService.isNumeric(props.badge) || TypeService.isString(props.badge, true));
    }


    function getBadge(props) {
        if (badgeValueExists(props)) {
            return (
                <Badge type={props.badgeType} color={props.badgeColor}>{props.badge}</Badge>
            );
        } else {
            return '';
        }
    }
}