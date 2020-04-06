import * as React from 'react';
import { CornerProps, DefaultContainerProps, InstanceItemProps, SelectionEventProps, StyleOf } from '../../types';


// export interface SvgSymbolProps extends DefaultContainerProps, InstanceItemProps, SelectionEventProps {
//   style?: StyleOf<GeometryStyleProperties & YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
//   source?: string;
// }
export type SvgSymbolProps = any;

const SvgSymbol: React.FC<SvgSymbolProps> = ({ children, ...props }) => (
    <svg_symbol {...props}>{children}</svg_symbol>
);

export default SvgSymbol;
