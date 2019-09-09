import * as React from 'react';
import { DefaultShapeProps } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { YogaContextProvider } from '../../hooks/useYogaLayout';

export interface FrameProps extends DefaultShapeProps {
    style?: LayoutStyleProperties;
}

export const Frame: React.ElementType<FrameProps> = props => {
    const yogaRef = React.useRef();
    const frameProps = {
        ...transformLayoutStyleProperties(props.style),
        ...props
    };

    return (
        <YogaContextProvider yogaRef={yogaRef}>
            {({ yogaProps }) => <frame {...frameProps} {...yogaProps} innerRef={yogaRef} />}
        </YogaContextProvider>
    );
};
