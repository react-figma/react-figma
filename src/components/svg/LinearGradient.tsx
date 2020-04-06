import * as React from 'react';
import { CornerProps, DefaultContainerProps, InstanceItemProps, SelectionEventProps, StyleOf } from '../../types';


// export interface SvgLinearGradientProps extends DefaultContainerProps, InstanceItemProps, SelectionEventProps {
//   style?: StyleOf<GeometryStyleProperties & YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
//   source?: string;
// }
export type SvgLinearGradientProps = any;

const SvgLinearGradient: React.FC<SvgLinearGradientProps> = ({ children, ...props }) => (
    <svg_linearGradient {...props}>{children}</svg_linearGradient>
);

export default SvgLinearGradient;
