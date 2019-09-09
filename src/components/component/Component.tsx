import * as React from 'react';
import { DefaultShapeProps } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout, YogaContextProvider } from '../../hooks/useYogaLayout';

export interface ComponentProps extends DefaultShapeProps {
    style?: LayoutStyleProperties;
}

export const Component: React.ElementType<ComponentProps> = props => {
    const yogaRef = React.useRef();
    const yogaChildProps = useYogaLayout({ yogaRef });
    const componentProps = {
        ...transformLayoutStyleProperties(props.style),
        ...props
    };

    return (
        <YogaContextProvider yogaRef={yogaRef}>
            {({ yogaProps }) => <component {...componentProps} {...yogaChildProps} {...yogaProps} innerRef={yogaRef} />}
        </YogaContextProvider>
    );
};
