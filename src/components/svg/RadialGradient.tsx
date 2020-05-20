import * as React from 'react';
import { CornerProps, DefaultContainerProps, InstanceItemProps, SelectionEventProps, StyleOf } from '../../types';

// export interface SvgRadialGradientProps extends DefaultContainerProps, InstanceItemProps, SelectionEventProps {
//   style?: StyleOf<GeometryStyleProperties & YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
//   source?: string;
// }
export type SvgRadialGradientProps = any;

const SvgRadialGradient: React.FC<SvgRadialGradientProps> = ({ children, ...props }) => (
    <svg_radialGradient {...props}>{children}</svg_radialGradient>
);

export default SvgRadialGradient;
