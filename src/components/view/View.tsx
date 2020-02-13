import * as React from 'react';
import { Group, Rectangle, StyleSheet } from '../..';
import { GroupNodeProps } from '../group/Group';
import { RectangleProps } from '../rectangle/Rectangle';
import { getRectangleStyleProperties } from '../../styleTransformers/getRectangleStyleProperties';

export type ViewProps = GroupNodeProps | RectangleProps;

export const View: React.FC<ViewProps> = props => {
    if (props.children) {
        const { children, style, ...otherProps } = props;
        const rectangleStyle = style && getRectangleStyleProperties(StyleSheet.flatten(style));
        return (
            <Group {...otherProps}>
                {rectangleStyle && Object.keys(rectangleStyle).length > 0 && (
                    <Rectangle
                        style={{
                            ...StyleSheet.absoluteFill,
                            ...rectangleStyle
                        }}
                    />
                )}
                {children}
            </Group>
        );
    } else {
        return <Rectangle {...(props as RectangleProps)} />;
    }
};
