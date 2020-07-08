import * as React from 'react';
import { DefaultShapeProps, CornerProps, StyleOf, InstanceItemProps, SelectionEventProps } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { transformBlendProperties, BlendStyleProperties } from '../../styleTransformers/transformBlendProperties';
import {
    GeometryStyleProperties,
    transformGeometryStyleProperties
} from '../../styleTransformers/transformGeometryStyleProperties';
import { useFillsPreprocessor } from '../../hooks/useFillsPreprocessor';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';
import { StyleSheet } from '../..';
import { useSelectionChange } from '../../hooks/useSelectionChange';
import { transformAutoLayoutToYoga } from '../../styleTransformers/transformAutoLayoutToYoga';
import { OnLayoutHandlerProps, useOnLayoutHandler } from '../../hooks/useOnLayoutHandler';

export interface EllipseProps
    extends DefaultShapeProps,
        CornerProps,
        InstanceItemProps,
        SelectionEventProps,
        OnLayoutHandlerProps {
    style?: StyleOf<YogaStyleProperties & LayoutStyleProperties & GeometryStyleProperties & BlendStyleProperties>;
    children?: undefined;
    arcData?: ArcData;
}

const Ellipse: React.FC<EllipseProps> = props => {
    const nodeRef = React.useRef();
    useSelectionChange(nodeRef, props);
    const style = { ...StyleSheet.flatten(props.style), ...transformAutoLayoutToYoga(props) };

    const ellipseProps = {
        ...transformLayoutStyleProperties(style),
        ...transformBlendProperties(style),
        ...transformGeometryStyleProperties('fills', style),
        ...props,
        style
    };
    const fills = useFillsPreprocessor(ellipseProps);
    const yogaChildProps = useYogaLayout({ nodeRef, ...ellipseProps });
    useOnLayoutHandler(yogaChildProps, props);

    return <ellipse {...ellipseProps} {...yogaChildProps} {...(fills && { fills })} innerRef={nodeRef} />;
};

export { Ellipse };
