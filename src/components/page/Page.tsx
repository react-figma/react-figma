import * as React from 'react';
import { BaseNodeProps, ChildrenProps, LayoutProps } from '../../types';
import { yogaHandler } from '../../yogaHandler';
import { YogaContextProvider } from '../../hooks/useYogaLayout';

interface Page extends BaseNodeProps, ChildrenProps {}

export const Page: React.ElementType<Page> = props => {
    const yogaRef = React.useRef();
    return (
        <YogaContextProvider {...props} yogaRef={yogaRef}>
            {({ yogaProps }) => <page {...props} {...yogaProps} innerRef={yogaRef} />}
        </YogaContextProvider>
    );
};
