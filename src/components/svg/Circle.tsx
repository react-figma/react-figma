import * as React from 'react';
import { CornerProps, DefaultContainerProps, InstanceItemProps, SelectionEventProps, StyleOf } from '../../types';


// export interface SvgCircleProps extends DefaultContainerProps, InstanceItemProps, SelectionEventProps {
//   style?: StyleOf<GeometryStyleProperties & YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
//   source?: string;
// }
export type SvgCircleProps = any;

const SvgCircle: React.FC<SvgCircleProps> = (props) => (
    <svg_circle {...props} />
);

export default SvgCircle;
