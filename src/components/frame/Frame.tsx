import * as React from 'react';
import { DefaultShapeProps } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout, YogaContextProvider } from '../../hooks/useYogaLayout';

export interface FrameProps extends DefaultShapeProps {
    style?: LayoutStyleProperties;
}

export const Frame: React.ElementType<FrameProps> = props => {
    const yogaRef = React.useRef();
    const yogaChildProps = useYogaLayout({ yogaRef });
    const frameProps = {
        ...transformLayoutStyleProperties(props.style),
        ...props
    };

    return (
        <YogaContextProvider {...props} yogaRef={yogaRef}>
            {({ yogaProps }) => <frame {...frameProps} {...yogaChildProps} {...yogaProps} innerRef={yogaRef} />}
        </YogaContextProvider>
    );
};
