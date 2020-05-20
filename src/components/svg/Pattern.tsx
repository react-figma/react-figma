import * as React from 'react';
import { CornerProps, DefaultContainerProps, InstanceItemProps, SelectionEventProps, StyleOf } from '../../types';

// export interface SvgCircleProps extends DefaultContainerProps, InstanceItemProps, SelectionEventProps {
//   style?: StyleOf<GeometryStyleProperties & YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
//   source?: string;
// }
export type SvgPatternProps = any;

const SvgPattern: React.FC<SvgPatternProps> = ({ children, ...props }) => (
    <svg_pattern {...props}>{children}</svg_pattern>
);

export default SvgPattern;
