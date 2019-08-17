import * as React from 'react';
import { DefaultShapeProps } from '../../types';
import { colorToRGB } from '../../helpers/color';

export interface FrameProps extends DefaultShapeProps {
    style?: {
        width?: number;
        height?: number;
        backgroundColor?: string;
    };
    children?: undefined;
}

export const Frame: React.ElementType<FrameProps> = props => {
    const frameProps = {
        width: props.style && props.style.width,
        height: props.style && props.style.height,
        fills: props.style &&
            props.style.backgroundColor && [{ type: 'SOLID', color: colorToRGB(props.style.backgroundColor) }],
        ...props
    };

    return <frame {...frameProps} />;
};
