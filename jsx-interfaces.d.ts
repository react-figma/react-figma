import { RectangleProps } from './src/components/rectangle/Rectangle';
import { FrameNodeProps } from './src/components/frame/Frame';
import { TextProps } from './src/components/text/Text';
import { GroupProps } from './src/components/group/Group';
import { EllipseProps } from './src/components/ellipse/Ellipse';
import {InstanceProps} from "./src/components/component/Instance";
import {ComponentProps} from "./src/components/component/Component"
import {StarProps} from "./src/components/star/Star";
import {VectorProps} from "./src/components/vector/Vector";

type SvgCircleProps = any;
// TODO: Type the rest of the Svg components

declare global {
    namespace JSX {
        interface IntrinsicElements {
            page: any;
            rectangle: RectangleProps;
            frame: FrameNodeProps;
            group: GroupProps;
            text: TextProps;
            component: ComponentProps;
            ellipse: EllipseProps;
            star: StarProps;
            vector: VectorProps,
            instance: InstanceProps,
            svg_circle: SvgCircleProps,
            svg_ellipse: any,
            svg_g: any,
            svg_text: any,
            svg_tspan: any,
            svg_textPath: any,
            svg_path: any,
            svg_polygon: any,
            svg_polyline: any,
            svg_line: any,
            svg_rect: any,
            svg_use: any,
            svg_image: any,
            svg_symbol: any,
            svg_defs: any,
            svg_linearGradient: any,
            svg_radialGradient: any,
            svg_stop: any,
            svg_clipPath: any,
            svg_pattern: any,
            svg_mask,
        }
    }
}
