import * as React from 'react';
export declare type PageLinkProps = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode | React.ReactNodeArray;
    href?: () => void;
    onClick?: () => void;
    innerRef?: any;
    notHref?: boolean;
    disabled?: boolean;
    textCenter?: boolean;
    title?: string;
};
declare const PageLink: (props: PageLinkProps) => JSX.Element;
export default PageLink;
