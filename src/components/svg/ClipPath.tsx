import * as React from 'react';
import { CornerProps, DefaultContainerProps, InstanceItemProps, SelectionEventProps, StyleOf } from '../../types';

// export interface SvgClipPathProps extends DefaultContainerProps, InstanceItemProps, SelectionEventProps {
//   style?: StyleOf<GeometryStyleProperties & YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
//   source?: string;
// }
export type SvgClipPathProps = any;

const SvgClipPath: React.FC<SvgClipPathProps> = ({ children, ...props }) => (
    <svg_clipPath {...props}>{children}</svg_clipPath>
);

export default SvgClipPath;
