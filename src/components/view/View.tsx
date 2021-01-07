import * as React from 'react';
import { Frame, Rectangle, StyleSheet } from '../..';
import { RectangleProps } from '../rectangle/Rectangle';
import { FrameNodeProps } from '../frame/Frame';

export type ViewProps = FrameNodeProps | RectangleProps;

const View: React.FC<ViewProps> = props => {
    const style = (props.style && StyleSheet.flatten(props.style)) || {};
    if (props.children) {
        return (
            <Frame
                {...props}
                style={[
                    { backgroundColor: 'transparent' },
                    (process.env.REACT_FIGMA_WEB_DEFAULTS_ENABLED &&
                        ((style as any).display === 'flex' || (style as any).display === 'inline-flex') && {
                            flexDirection: 'row'
                        }) ||
                        undefined,
                    (process.env.REACT_FIGMA_WEB_DEFAULTS_ENABLED && { alignItems: 'stretch' }) || undefined,
                    style
                ]}
            />
        );
    } else {
        return <Rectangle {...(props as RectangleProps)} />;
    }
};

export { View };
