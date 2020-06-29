import * as React from 'react';
import { Frame, Rectangle, StyleSheet } from '../..';
import { RectangleProps } from '../rectangle/Rectangle';
import { FrameNodeProps } from '../frame/Frame';

export type ViewProps = FrameNodeProps | RectangleProps;

export const View: React.FC<ViewProps> = (props) => {
    if (props.children) {
        return (
            <Frame
                {...props}
                style={[{ backgroundColor: 'transparent' }, props.style && StyleSheet.flatten(props.style)]}
            />
        );
    } else {
        return <Rectangle {...(props as RectangleProps)} />;
    }
};
