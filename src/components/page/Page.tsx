import * as React from 'react';
import { BaseNodeProps, LayoutProps } from '../../types';

interface Page extends BaseNodeProps {}

export const Page: React.ElementType<Page> = props => {
    return <page {...props} />;
};
