import * as React from 'react';
import {
    DefaultShapeProps,
    CornerProps,
    StarNodeProps,
    StyleOf,
    InstanceItemProps,
    SelectionEventProps
} from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import {
    GeometryStyleProperties,
    transformGeometryStyleProperties
} from '../../styleTransformers/transformGeometryStyleProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { useFillsPreprocessor } from '../../hooks/useFillsPreprocessor';
import { transformBlendProperties, BlendStyleProperties } from '../../styleTransformers/transformBlendProperties';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';
import { StyleSheet } from '../..';
import { useSelectionChange } from '../../hooks/useSelectionChange';
import { transformAutoLayoutToYoga } from '../../styleTransformers/transformAutoLayoutToYoga';
import { OnLayoutHandlerProps, useOnLayoutHandler } from '../../hooks/useOnLayoutHandler';

export interface StarProps
    extends DefaultShapeProps,
        CornerProps,
        StarNodeProps,
        InstanceItemProps,
        SelectionEventProps,
        OnLayoutHandlerProps {
    style?: StyleOf<YogaStyleProperties & LayoutStyleProperties & GeometryStyleProperties & BlendStyleProperties>;
    children?: undefined;
}

export const Star: React.FC<StarProps> = props => {
    const nodeRef = React.useRef();

    useSelectionChange(nodeRef, props);

    const style = { ...StyleSheet.flatten(props.style), ...transformAutoLayoutToYoga(props) };

    const starProps = {
        ...transformLayoutStyleProperties(style),
        ...transformGeometryStyleProperties('fills', style),
        ...transformBlendProperties(style),
        ...props,
        style
    };
    const fills = useFillsPreprocessor(starProps);
    const yogaProps = useYogaLayout({ nodeRef, ...starProps });
    useOnLayoutHandler(yogaProps, props);

    return <star {...starProps} {...yogaProps} {...(fills && { fills })} innerRef={nodeRef} />;
};
