import * as React from 'react';


import * as SimpleComponents from '@waveortho/simple-components';
const {BreadcrumbContainer, BreadcrumbItem, Badge, BreadcrumbSeparator} = SimpleComponents;

import {TypeService} from '@waveortho/services';


//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

export type BreadcrumbsProps = {
    className?: string,
    style?: React.CSSProperties,
    items: BreadcrumbItem[],
    onUrlChange: (url: string) => void
};


export type BreadcrumbItem = {
    name: string,
    url: string
}

export default function Index(props: BreadcrumbsProps) {
    const children = generateChildren(props);

    return (
        <BreadcrumbContainer className={props.className} style={props.style}>
            {children}
        </BreadcrumbContainer>
    );
}



function generateChildren(props) {
    const items = props.items;

    if (TypeService.isArray(items) && items.length > 0) {
        validateItems(items);

        return generateBreadcrumbList(items, props);
    } else {
        console.warn('props.items (Array) is required and cannot be empty');
    }
}



function generateBreadcrumbList(items, props) {
    const totalItems = items.length;

    const masterItemList = [] as any[];

    items.forEach((item, i) => {
        const isLastItem = i + 1 === totalItems;
        const key = '' + item.key;
        const {name, url} = item;

        masterItemList.push(
            // @ts-ignore
            <BreadcrumbItem key={key}
                            href={() => {
                                if (!isLastItem) {
                                    props.onUrlChange(url);
                                }
                            }}
                            active={isLastItem}>
                {name}
            </BreadcrumbItem>
        );

        if (!isLastItem) {
            // @ts-ignore
            masterItemList.push(<BreadcrumbSeparator key={key + '-separator'}/>);
        }
    });

    return masterItemList;
}



function validateItems(items) {
    let generateKeys = false;
    const totalItems = items.length;

    items.forEach((item, i) => {
        const isLastItem = i + 1 === totalItems;

        if (TypeService.isObject(item) === false) {
            throw new Error('Breadcrumb item (Object) is required for all items');
        } else if (TypeService.isString(item.name) === false) {
            throw new Error('Breadcrumb item.name (String) is required for all items');
        } else if (TypeService.isString(item.url) === false && isLastItem === false) {
            throw new Error('Breadcrumb item.url (String) is required for all but the last item');
        } else {
            if (TypeService.isString(item.key) === false && TypeService.isNumeric(item.key) === false) {
                generateKeys = true;
            }

            if (generateKeys) {
                item.key = i;
            }
        }
    });
}