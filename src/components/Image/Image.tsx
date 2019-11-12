import * as React from 'react';
import { RectangleProps, Rectangle } from '../rectangle/Rectangle';
import { ResizeMode } from '../../styleTransformers/transformGeometryStyleProperties';

export interface ImageProps extends RectangleProps {
    source: string;
    resizeMode?: ResizeMode;
}

export const Image: React.FC<ImageProps> = props => {
    const style = props.style || {};

    style.backgroundImage = props.source;
    style.backgroundSize = props.resizeMode;

    return <Rectangle {...props} style={style} />;
};
