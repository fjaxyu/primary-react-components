import * as React from 'react';
export declare type TabNavProps = {
    views: ViewList;
    activeViewID?: string;
    reset?: any;
};
export declare type View = {
    id: string;
    name: React.ReactNode | string;
    children: React.ReactNode;
    onOpen?: (previousView: string) => void;
    onClose?: () => void;
};
export declare type ViewList = View[];
export default function Index(props: TabNavProps): JSX.Element;
