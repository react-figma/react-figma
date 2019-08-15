import * as React from 'react';
import { BaseNodeProps, ChildrenProps, LayoutProps } from '../../types';

interface CurrentPageProps extends ChildrenProps {}

export const CurrentPage: React.ElementType<CurrentPageProps> = props => {
    return <currentPage {...props} />;
};
