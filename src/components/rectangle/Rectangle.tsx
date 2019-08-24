import * as React from 'react';
import { DefaultShapeProps } from '../../types';
import { colorToRGB } from '../../helpers/color';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';

interface RectangleProps extends DefaultShapeProps {
    style?: LayoutStyleProperties & {
        backgroundColor?: string;
        backgroundImage?: string;
        backgroundSize: any;
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
        ...transformLayoutStyleProperties(props.style),
        fills,
        ...props
    };

    return <rectangle {...rectangleProps} />;
};
