import * as React from 'react';
import { CornerProps, DefaultContainerProps, InstanceItemProps, SelectionEventProps, StyleOf } from '../../types';

// export interface SvgCircleProps extends DefaultContainerProps, InstanceItemProps, SelectionEventProps {
//   style?: StyleOf<GeometryStyleProperties & YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
//   source?: string;
// }
export type SvgMaskProps = any;

const SvgMask: React.FC<SvgMaskProps> = ({ children, ...props }) => <svg_mask {...props}>{children}</svg_mask>;

export default SvgMask;
