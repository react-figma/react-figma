import * as React from 'react';
import { BaseNodeProps } from '../../types';

interface TextProps extends BaseNodeProps {
    style: any;
}

export const Text: React.ElementType<TextProps> = props => <text {...props} />;
