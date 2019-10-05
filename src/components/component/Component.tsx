import * as React from 'react';
import { BaseNodeProps, LayoutProps } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout, YogaContextProvider } from '../../hooks/useYogaLayout';

export interface ComponentProps extends BaseNodeProps, LayoutProps {
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
        <YogaContextProvider {...props} yogaRef={yogaRef}>
            {({ yogaProps }) => <component {...componentProps} {...yogaChildProps} {...yogaProps} innerRef={yogaRef} />}
        </YogaContextProvider>
    );
};
