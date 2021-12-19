import * as React from 'react';
import {IconLinkCardProps} from '../IconLinkCard/types';

export type IconLinkCardListProps = {
    options: IconLinkCardProps[],
    align?: 'left' | 'center' | 'right'
};