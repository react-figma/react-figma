import * as React from 'react';
import { CornerProps, DefaultContainerProps, InstanceItemProps, SelectionEventProps, StyleOf } from '../../types';


// export interface SvgEllipseProps extends DefaultContainerProps, InstanceItemProps, SelectionEventProps {
//   style?: StyleOf<GeometryStyleProperties & YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
//   source?: string;
// }
export type SvgEllipseProps = any;

const SvgEllipse: React.FC<SvgEllipseProps> = ({ children, ...props }) => (
    <svg_ellipse {...props}>{children}</svg_ellipse>
);

export default SvgEllipse;
