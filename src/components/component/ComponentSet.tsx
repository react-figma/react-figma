import * as React from 'react';
import { AutoLayoutProps, DefaultContainerProps, PublishableProps, SelectionEventProps, StyleOf } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';
import { StyleSheet } from '../..';
import { useSelectionChange } from '../../hooks/useSelectionChange';
import { transformAutoLayoutToYoga } from '../../styleTransformers/transformAutoLayoutToYoga';
import { OnLayoutHandlerProps, useOnLayoutHandler } from '../../hooks/useOnLayoutHandler';
import { useNodeIdCallback } from '../../hooks/useNodeIdCallback';

export interface ComponentSetProps
    extends DefaultContainerProps,
        SelectionEventProps,
        AutoLayoutProps,
        OnLayoutHandlerProps,
        PublishableProps {
    style?: StyleOf<YogaStyleProperties & LayoutStyleProperties>;
    nodeRef?: any;
}

const ComponentSet: React.FC<ComponentSetProps> = props => {
    const nodeRef = props.nodeRef || React.useRef();
    useSelectionChange(nodeRef, props);
    useNodeIdCallback(nodeRef, props.onNodeId);
    const style = { ...StyleSheet.flatten(props.style), ...transformAutoLayoutToYoga(props) };
    const componentProps = {
        ...transformLayoutStyleProperties(style),
        ...props,
        style
    };
    const yogaChildProps = useYogaLayout({ nodeRef, ...componentProps });

    useOnLayoutHandler(yogaChildProps, props);

    return <componentset {...componentProps} {...yogaChildProps} innerRef={nodeRef} />;
};

export { ComponentSet };
