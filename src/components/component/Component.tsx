import * as React from 'react';
import { DefaultShapeProps } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { YogaContextProvider } from '../../hooks/useYogaLayout';

export interface ComponentProps extends DefaultShapeProps {
    style?: LayoutStyleProperties;
}

export const Component: React.ElementType<ComponentProps> = props => {
    const yogaRef = React.useRef();
    const componentProps = {
        ...transformLayoutStyleProperties(props.style),
        ...props
    };

    return (
        <YogaContextProvider yogaRef={yogaRef}>
            {({ yogaProps }) => <component {...componentProps} {...yogaProps} innerRef={yogaRef} />}
        </YogaContextProvider>
    );
};
