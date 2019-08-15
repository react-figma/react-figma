import * as React from 'react';
import { DefaultShapeProps } from '../../types';
import { colorToRGB } from '../../helpers/color';

interface RectangleProps extends DefaultShapeProps {
    style?: {
        width?: number;
        height?: number;
        backgroundColor?: string;
    };
    children?: undefined;
}

export const Rectangle: React.ElementType<RectangleProps> = props => {
    const rectangleProps = {
        width: props.style && props.style.width,
        height: props.style && props.style.height,
        fills: props.style &&
            props.style.backgroundColor && [{ type: 'SOLID', color: colorToRGB(props.style.backgroundColor) }],
        ...props
    };
    return <rectangle {...rectangleProps} />;
};
