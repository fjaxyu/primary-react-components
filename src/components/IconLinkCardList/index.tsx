import * as React from 'react';

import Box from './../Box';

import IconLinkCard, {IconCardLinkProps} from './../IconLinkCard';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


export type IconLinkCardListProps = {
    options: IconCardLinkProps[],
    align?: 'left' | 'center' | 'right'
};


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