import * as React from 'react';
import { BaseNodeProps, ChildrenProps, LayoutProps, ExportProps } from '../../types';
import { transformLayoutStyleProperties } from '../../styleTransformers/transformLayoutStyleProperties';
import { transformBlendProperties } from '../../styleTransformers/transformBlendProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';

export interface PageProps extends BaseNodeProps, ChildrenProps, ExportProps {
    isCurrent?: boolean;
}

export const Page: React.FC<PageProps> = props => {
    const yogaRef = React.useRef();

    const yogaChildProps = useYogaLayout({ yogaRef, ...props });
    return <page {...props} {...yogaChildProps} innerRef={yogaRef} />;
};
