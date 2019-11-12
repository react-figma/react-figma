import * as React from 'react';
import { BorderProps, CornerProps, DefaultContainerProps, DefaultShapeProps } from '../../types';
import { LayoutStyleProperties } from '../../styleTransformers/transformLayoutStyleProperties';
import { GeometryStyleProperties } from '../../styleTransformers/transformGeometryStyleProperties';
import { BorderStyleProperties } from '../../styleTransformers/transformBorderProperties';
import { BlendStyleProperties } from '../../styleTransformers/transformBlendProperties';
import { Group, Rectangle } from '../..';

export interface ViewProps extends DefaultContainerProps, DefaultShapeProps, CornerProps, BorderProps {
    style?: LayoutStyleProperties & GeometryStyleProperties & BorderStyleProperties & BlendStyleProperties;
}

export const View: React.FC<ViewProps> = props => {
    if (props.children) {
        return <Group {...props} />;
    } else {
        // @ts-ignore
        return <Rectangle {...props} />;
    }
};
