import * as React from 'react';
import { BaseNodeProps, ChildrenProps, LayoutProps } from '../../types';

interface Page extends BaseNodeProps, ChildrenProps {}

export const Page: React.ElementType<Page> = props => {
    return <page {...props} />;
};
