import * as React from 'react';
import { Group, Rectangle } from '../..';
import { GroupNodeProps } from '../group/Group';
import { RectangleProps } from '../rectangle/Rectangle';

export type ViewProps = GroupNodeProps | RectangleProps;

export const View: React.FC<ViewProps> = props => {
    if (props.children) {
        return <Group {...props} />;
    } else {
        return <Rectangle {...(props as RectangleProps)} />;
    }
};
