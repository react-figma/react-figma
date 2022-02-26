import * as React from 'react';
import { BaseNodeProps, ChildrenProps, ExportProps, StyleOf } from '../../types';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';
import { $currentPageTempId, api } from '../../rpc';
import { map } from 'rxjs/operators';
import { OnLayoutHandlerProps, useOnLayoutHandler } from '../../hooks/useOnLayoutHandler';
import { InheritStyleProvider } from '../../hooks/useInheritStyle';

export interface PageProps extends BaseNodeProps, ChildrenProps, ExportProps, OnLayoutHandlerProps {
    style?: StyleOf<YogaStyleProperties>;
    isCurrent?: boolean;
    onCurrentChange?: (isCurrent: boolean) => void;
    backgrounds?: ReadonlyArray<Paint>;
}

export const useCurrentPageChange = (
    nodeRef: { current?: any },
    callback?: ((isCurrent: boolean) => void) | void,
    _isCurrent?: boolean
) => {
    React.useEffect(() => {
        const instance = nodeRef.current;
        const subject = $currentPageTempId.pipe(map((message: any) => message === instance.reactId));

        const subscription = subject.subscribe(value => callback && callback(value));

        return () => subscription.unsubscribe();
    }, []);

    React.useEffect(() => {
        if (_isCurrent) {
            api.setCurrentPage(nodeRef.current);
        }
    }, [_isCurrent]);
};

const Page: React.FC<PageProps> = props => {
    const nodeRef = React.useRef();
    const { onCurrentChange, ...otherProps } = props;
    useCurrentPageChange(nodeRef, onCurrentChange, props.isCurrent);

    const yogaChildProps = useYogaLayout({ nodeRef, ...otherProps });
    useOnLayoutHandler(yogaChildProps, props);

    return (
        <InheritStyleProvider style={props.style}>
            <page {...otherProps} {...yogaChildProps} innerRef={nodeRef} />
        </InheritStyleProvider>
    );
};

export { Page };
