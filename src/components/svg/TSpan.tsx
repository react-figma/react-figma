import * as React from 'react';
import { CornerProps, DefaultContainerProps, InstanceItemProps, SelectionEventProps, StyleOf } from '../../types';


// export interface SvgTSpanProps extends DefaultContainerProps, InstanceItemProps, SelectionEventProps {
//   style?: StyleOf<GeometryStyleProperties & YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
//   source?: string;
// }
export type SvgTSpanProps = any;

const SvgTSpan: React.FC<SvgTSpanProps> = ({ children, ...props }) => (
    <svg_tspan {...props}>{children}</svg_tspan>
);

export default SvgTSpan;
