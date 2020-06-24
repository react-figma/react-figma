import * as React from 'react';
import { StyleOf, BaseNodeProps, SceneNodeProps, LayoutProps, ExportProps } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { StyleSheet } from '../..';

export interface SliceProps extends BaseNodeProps, SceneNodeProps, LayoutProps, ExportProps {
    style?: StyleOf<LayoutStyleProperties>;
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
    const yogaChildProps = useYogaLayout({ nodeRef, ...sliceProps });

    return <slice {...sliceProps} {...yogaChildProps} innerRef={nodeRef} />;
};
