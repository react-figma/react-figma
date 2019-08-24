import * as React from 'react';
import { DefaultShapeProps } from '../../types';
import { colorToRGB } from '../../helpers/color';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';

export interface ComponentProps extends DefaultShapeProps {
    style: LayoutStyleProperties & {
        backgroundColor?: string;
    };
    children?: undefined;
}

export const Component: React.ElementType<ComponentProps> = props => {
    const componentProps = {
        ...transformLayoutStyleProperties(props.style),
        fills: props.style &&
            props.style.backgroundColor && [{ type: 'SOLID', color: colorToRGB(props.style.backgroundColor) }],
        ...props
    };

    return <component {...componentProps} />;
};
