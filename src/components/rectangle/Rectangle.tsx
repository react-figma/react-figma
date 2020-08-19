import * as React from 'react';
import {
    DefaultShapeProps,
    BorderProps,
    CornerProps,
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
import {
    BorderStyleProperties,
    transformBorderStyleProperties
} from '../../styleTransformers/transformBorderProperties';
import { transformBlendProperties, BlendStyleProperties } from '../../styleTransformers/transformBlendProperties';
import { StyleSheet } from '../..';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';
import { useSelectionChange } from '../../hooks/useSelectionChange';
import { transformAutoLayoutToYoga } from '../../styleTransformers/transformAutoLayoutToYoga';
import { OnLayoutHandlerProps, useOnLayoutHandler } from '../../hooks/useOnLayoutHandler';
import { filter } from 'rxjs/operators';
import { useImageHash } from '../../hooks/useImageHash';

export interface RectangleProps
    extends DefaultShapeProps,
        CornerProps,
        BorderProps,
        InstanceItemProps,
        SelectionEventProps,
        OnLayoutHandlerProps {
    style?: StyleOf<
        LayoutStyleProperties &
            YogaStyleProperties &
            BorderStyleProperties &
            BlendStyleProperties &
            GeometryStyleProperties
    >;
    children?: undefined;
}

const Rectangle: React.FC<RectangleProps> = props => {
    const nodeRef = React.useRef();

    useSelectionChange(nodeRef, props);

    const style = { ...StyleSheet.flatten(props.style), ...transformAutoLayoutToYoga(props) };

    const imageHash = useImageHash(style.backgroundImage);

    const rectangleProps = {
        ...transformLayoutStyleProperties(style),
        ...transformGeometryStyleProperties('fills', style, imageHash),
        ...transformBorderStyleProperties(style),
        ...transformBlendProperties(style),
        ...props,
        style
    };
    const yogaProps = useYogaLayout({ nodeRef, ...rectangleProps });

    useOnLayoutHandler(yogaProps, props);

    return <rectangle {...rectangleProps} {...yogaProps} innerRef={nodeRef} />;
};

export { Rectangle };
