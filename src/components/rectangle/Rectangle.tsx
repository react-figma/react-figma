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
    const fills = [];

    if (props.style && props.style.backgroundColor) {
        fills.push({ type: 'SOLID', color: colorToRGB(props.style.backgroundColor) });
    }

    if (props.style && props.style.backgroundImage) {
        fills.push({ type: 'IMAGE', image: props.style.backgroundImage, scaleMode: props.style.backgroundSize });
    }

    const rectangleProps = {
        width: props.style && props.style.width,
        height: props.style && props.style.height,
        fills,
        ...props
    };

    return <rectangle {...rectangleProps} />;
};
