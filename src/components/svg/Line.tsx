import * as React from 'react';
import { CornerProps, DefaultContainerProps, InstanceItemProps, SelectionEventProps, StyleOf } from '../../types';

// export interface SvgLineProps extends DefaultContainerProps, InstanceItemProps, SelectionEventProps {
//   style?: StyleOf<GeometryStyleProperties & YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
//   source?: string;
// }
export type SvgLineProps = any;

const SvgLine: React.FC<SvgLineProps> = ({ children, ...props }) => <svg_line {...props}>{children}</svg_line>;

export default SvgLine;
