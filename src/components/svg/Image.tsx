import * as React from 'react';
import { CornerProps, DefaultContainerProps, InstanceItemProps, SelectionEventProps, StyleOf } from '../../types';

// export interface SvgImageProps extends DefaultContainerProps, InstanceItemProps, SelectionEventProps {
//   style?: StyleOf<GeometryStyleProperties & YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
//   source?: string;
// }
export type SvgImageProps = any;

const SvgImage: React.FC<SvgImageProps> = ({ children, ...props }) => <svg_image {...props}>{children}</svg_image>;

SvgImage.defaultProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    preserveAspectRatio: 'xMidYMid meet'
};

export default SvgImage;
