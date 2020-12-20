import * as React from 'react';
import { StyleOf, BaseNodeProps, SceneNodeProps, LayoutProps, ExportProps } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { StyleSheet } from '../..';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';
import { OnLayoutHandlerProps, useOnLayoutHandler } from '../../hooks/useOnLayoutHandler';

export interface SliceProps extends BaseNodeProps, SceneNodeProps, LayoutProps, ExportProps, OnLayoutHandlerProps {
    style?: StyleOf<LayoutStyleProperties & YogaStyleProperties>;
    children?: undefined;
}

export const Slice: React.FC<SliceProps> = props => {
    const nodeRef = React.useRef();

    const style = { ...StyleSheet.flatten(props.style) };

    const sliceProps = {
        ...transformLayoutStyleProperties(style),
        ...props,
        style
    };
    const yogaProps = useYogaLayout({ nodeRef, ...sliceProps });
    useOnLayoutHandler(yogaProps, props);

    return <slice {...sliceProps} {...yogaProps} innerRef={nodeRef} />;
};
