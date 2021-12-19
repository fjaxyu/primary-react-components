import * as React from 'react';

import Box from './../Box';

import IconLinkCard from './../IconLinkCard';
import {IconLinkCardListProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//



export default function Index(props: IconLinkCardListProps) {
    let {options, align} = props;

    let className = [
        'icon-link-card-list-container',
        'align-' + (align || 'left')
    ].join(' ');

    return (
        <Box className={className}>
            {
                options.map((option, index) => {
                    return (
                        <IconLinkCard {...option}
                                      key={index}/>
                    );
                })
            }
        </Box>
    );
}