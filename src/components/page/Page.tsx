import * as React from 'react';
import { BaseNodeProps, ChildrenProps, ExportProps, StyleOf } from '../../types';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';

export interface PageProps extends BaseNodeProps, ChildrenProps, ExportProps {
    style?: StyleOf<YogaStyleProperties>;
    isCurrent?: boolean;
    onCurrentChange?: (isCurrent: boolean) => void;
}

export const useCurrentPageChange = (nodeRef: { current?: PageNode }, callback?: (isCurrent: boolean) => void) => {
    const didMountRef = React.useRef(false);
    const [isCurrent, setIsCurrent] = React.useState(false);

    React.useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true;
            return;
        }
        callback(isCurrent);
    }, [isCurrent]);

    React.useEffect(() => {
        const handler = () => {
            setIsCurrent(figma.currentPage === nodeRef.current);
        };
        figma.on('currentpagechange', handler);
        return () => figma.off('currentpagechange', handler);
    }, [callback]);
};

export const Page: React.FC<PageProps> = props => {
    const nodeRef = React.useRef();
    useCurrentPageChange(nodeRef, props.onCurrentChange);

    const yogaChildProps = useYogaLayout({ nodeRef, ...props });
    return <page {...props} {...yogaChildProps} innerRef={nodeRef} />;
};
