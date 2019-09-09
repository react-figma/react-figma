import * as React from 'react';
import { BaseNodeProps, ChildrenProps, LayoutProps } from '../../types';
import { yogaHandler } from '../../yogaHandler';
import { YogaContextProvider } from '../../hooks/useYogaLayout';

interface Page extends BaseNodeProps, ChildrenProps {}

export const Page: React.ElementType<Page> = props => {
    return (
        <YogaContextProvider>
            {({ ref, yogaProps: { children, ...yogaPropsWithoutChildren } }) => (
                <page {...props} {...yogaPropsWithoutChildren} innerRef={ref} />
            )}
        </YogaContextProvider>
    );
};
