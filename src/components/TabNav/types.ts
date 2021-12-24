import * as React from 'react';

export type TabNavProps = {
    views: ViewList,
    activeViewID?: string,
    reset?: any
};


export type View = {
    id: string,
    name: React.ReactNode | string,
    children: React.ReactNode,
    onOpen?: (previousView: string) => void,
    onClose?: () => void
}



export type ViewList = View[];