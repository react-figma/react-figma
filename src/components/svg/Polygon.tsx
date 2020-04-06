import * as React from 'react';
import { CornerProps, DefaultContainerProps, InstanceItemProps, SelectionEventProps, StyleOf } from '../../types';


// export interface SvgPolygonProps extends DefaultContainerProps, InstanceItemProps, SelectionEventProps {
//   style?: StyleOf<GeometryStyleProperties & YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
//   source?: string;
// }
export type SvgPolygonProps = any;

const SvgPolygon: React.FC<SvgPolygonProps> = ({ children, ...props }) => (
    <svg_polygon {...props}>{children}</svg_polygon>
);

export default SvgPolygon;
