import * as React from 'react';
import { CornerProps, DefaultContainerProps, InstanceItemProps, SelectionEventProps, StyleOf } from '../../types';

// export interface SvgRectProps extends DefaultContainerProps, InstanceItemProps, SelectionEventProps {
//   style?: StyleOf<GeometryStyleProperties & YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
//   source?: string;
// }
export type SvgRectProps = any;

const SvgRect: React.FC<SvgRectProps> = ({ children, ...props }) => <svg_rect {...props}>{children}</svg_rect>;

export default SvgRect;
