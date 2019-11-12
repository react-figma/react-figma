import * as React from 'react';
import { BaseNodeProps, ChildrenProps, LayoutProps, ExportProps } from '../../types';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';

export interface PageProps extends BaseNodeProps, ChildrenProps, ExportProps {
    style?: YogaStyleProperties;
    isCurrent?: boolean;
}

export const Page: React.FC<PageProps> = props => {
    const yogaRef = React.useRef();

    const yogaChildProps = useYogaLayout({ yogaRef, ...props });
    return <page {...props} {...yogaChildProps} innerRef={yogaRef} />;
};
