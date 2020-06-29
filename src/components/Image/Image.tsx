import * as React from 'react';
import { RectangleProps, Rectangle } from '../rectangle/Rectangle';
import { ResizeMode } from '../../styleTransformers/transformGeometryStyleProperties';
import { StyleSheet } from '../..';

export interface ImageProps extends RectangleProps {
    source: string;
    resizeMode?: ResizeMode;
}

export const Image: React.FC<ImageProps> = (props) => {
    const { style, source, resizeMode } = props;
    return (
        <Rectangle
            {...props}
            style={[StyleSheet.flatten(style), { backgroundImage: source, backgroundSize: resizeMode }]}
        />
    );
};
