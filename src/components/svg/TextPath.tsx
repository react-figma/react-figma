import * as React from 'react';
import { CornerProps, DefaultContainerProps, InstanceItemProps, SelectionEventProps, StyleOf } from '../../types';

// export interface SvgTextPathProps extends DefaultContainerProps, InstanceItemProps, SelectionEventProps {
//   style?: StyleOf<GeometryStyleProperties & YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
//   source?: string;
// }
export type SvgTextPathProps = any;

const SvgTextPath: React.FC<SvgTextPathProps> = ({ children, ...props }) => (
    <svg_textPath {...props}>{children}</svg_textPath>
);

export default SvgTextPath;
