import * as React from 'react';
import { BaseNodeProps, ChildrenProps, LayoutProps, ExportProps } from '../../types';
import { yogaHandler } from '../../yogaHandler';
import { YogaContextProvider } from '../../hooks/useYogaLayout';

export interface PageProps extends BaseNodeProps, ChildrenProps, ExportProps {
    yogaRef: any;
}

export const Page: React.ElementType<PageProps> = props => {
    const { yogaRef } = props;
    return <page {...props} innerRef={yogaRef} />;
};
