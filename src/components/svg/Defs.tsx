import * as React from 'react';
import { CornerProps, DefaultContainerProps, InstanceItemProps, SelectionEventProps, StyleOf } from '../../types';


// export interface SvgDefsProps extends DefaultContainerProps, InstanceItemProps, SelectionEventProps {
//   style?: StyleOf<GeometryStyleProperties & YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
//   source?: string;
// }
export type SvgDefsProps = any;

const SvgDefs: React.FC<SvgDefsProps> = ({ children, ...props }) => (
    <svg_defs {...props}>{children}</svg_defs>
);

export default SvgDefs;
