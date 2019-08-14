import * as React from 'react';
import { BaseNodeProps, LayoutProps } from '../../types';

interface RectangleProps extends BaseNodeProps, LayoutProps {
    style?: {
        width?: number;
        height?: number;
        backgroundColor?: string;
    };
}

export const Rectangle: React.ElementType<RectangleProps> = props => {
    const rectangleProps = {
        width: props.style && props.style.width,
        height: props.style && props.style.height,
        ...props
    };
    return <rectangle {...rectangleProps} />;
};
