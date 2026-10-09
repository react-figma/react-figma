import * as React from 'react';
import { RectangleProps, Rectangle } from '../rectangle/Rectangle';
import { ResizeMode } from '../../styleTransformers/transformGeometryStyleProperties';
import { StyleSheet, Svg } from '../..';
import { useSvgText } from '../../hooks/useSvgText';

export interface ImageProps extends RectangleProps {
    source: string | { uri: string } | { default: string };
    resizeMode?: ResizeMode;
}

const Image: React.FC<ImageProps> = props => {
    const { style, source, resizeMode } = props;
    let svgText;

    if (typeof source === 'string' && source.slice(0, 4) === '<svg') {
        svgText = source;
    }
    if (typeof source !== 'string' && 'uri' in source && source.uri.slice(-4) === '.svg') {
        svgText = useSvgText(source.uri);
    }
    if (svgText) {
        return <Svg style={style} source={svgText} />;
    }

    return (
        <Rectangle
            {...props}
            style={[StyleSheet.flatten(style), { backgroundImage: source, backgroundSize: resizeMode }]}
        />
    );
};

export { Image };
