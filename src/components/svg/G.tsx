import * as React from 'react';
import { CornerProps, DefaultContainerProps, InstanceItemProps, SelectionEventProps, StyleOf } from '../../types';

// export interface SvgCircleProps extends DefaultContainerProps, InstanceItemProps, SelectionEventProps {
//   style?: StyleOf<GeometryStyleProperties & YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
//   source?: string;
// }
export type SvgGProps = any;

const SvgG: React.FC<SvgGProps> = ({ children, ...props }) => <svg_g {...props}>{children}</svg_g>;

export default SvgG;
