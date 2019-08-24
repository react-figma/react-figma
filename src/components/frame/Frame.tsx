import * as React from 'react';
import { DefaultShapeProps } from '../../types';
import { colorToRGB } from '../../helpers/color';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';

export interface FrameProps extends DefaultShapeProps {
    style: LayoutStyleProperties & {
        backgroundColor?: string;
    };
    children?: undefined;
}

export const Frame: React.ElementType<FrameProps> = props => {
    const frameProps = {
        ...transformLayoutStyleProperties(props.style),
        fills: props.style &&
            props.style.backgroundColor && [{ type: 'SOLID', color: colorToRGB(props.style.backgroundColor) }],
        ...props
    };

    return <frame {...frameProps} />;
};
