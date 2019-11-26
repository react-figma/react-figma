import * as React from 'react';
import { BaseNodeProps, ChildrenProps, LayoutProps, ExportProps, StyleOf } from '../../types';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';

export interface PageProps extends BaseNodeProps, ChildrenProps, ExportProps {
    style?: StyleOf<YogaStyleProperties>;
    isCurrent?: boolean;
}

export const Page: React.FC<PageProps> = props => {
    const nodeRef = React.useRef();

    const yogaChildProps = useYogaLayout({ nodeRef, ...props });
    return <page {...props} {...yogaChildProps} innerRef={nodeRef} />;
};
