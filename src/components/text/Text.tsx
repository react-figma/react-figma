import * as React from 'react';
import { BaseNodeProps, LayoutProps } from '../../types';

interface TextProps extends BaseNodeProps, LayoutProps {
    style?: {
        width?: number;
        height?: number;
        color?: string;
    };
}

export const Text: React.ElementType<TextProps> = props => {
    const textProps = {
        width: props.style && props.style.width,
        height: props.style && props.style.height,
        ...props
    };
    return <text {...textProps} />;
};
