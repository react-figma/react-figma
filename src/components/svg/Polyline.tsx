import * as React from 'react';
import { CornerProps, DefaultContainerProps, InstanceItemProps, SelectionEventProps, StyleOf } from '../../types';

// export interface SvgPolylineProps extends DefaultContainerProps, InstanceItemProps, SelectionEventProps {
//   style?: StyleOf<GeometryStyleProperties & YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
//   source?: string;
// }
export type SvgPolylineProps = any;

const SvgPolyline: React.FC<SvgPolylineProps> = ({ children, ...props }) => (
    <svg_polyline {...props}>{children}</svg_polyline>
);

export default SvgPolyline;
