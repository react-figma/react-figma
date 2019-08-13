import * as React from 'react';
import { BaseNodeProps } from '../../types';

interface RectangleProps extends BaseNodeProps {
    style: any;
}

export const Rectangle: React.ElementType<RectangleProps> = props => <rectangle {...props} />;
