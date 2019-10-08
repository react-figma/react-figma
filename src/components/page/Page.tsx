import * as React from 'react';
import { BaseNodeProps, ChildrenProps, LayoutProps } from '../../types';
import { yogaHandler } from '../../yogaHandler';
import { YogaContextProvider } from '../../hooks/useYogaLayout';

interface Page extends BaseNodeProps, ChildrenProps {
    yogaRef: any;
}

export const Page: React.ElementType<Page> = props => {
    const { yogaRef } = props;
    return <page {...props} innerRef={yogaRef} />;
};
