import * as React from 'react';
import { CornerProps, DefaultContainerProps, InstanceItemProps, SelectionEventProps, StyleOf } from '../../types';


// export interface SvgStopProps extends DefaultContainerProps, InstanceItemProps, SelectionEventProps {
//   style?: StyleOf<GeometryStyleProperties & YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
//   source?: string;
// }
export type SvgStopProps = any;

const SvgStop: React.FC<SvgStopProps> = ({ children, ...props }) => (
    <svg_stop {...props}>{children}</svg_stop>
);

export default SvgStop;
