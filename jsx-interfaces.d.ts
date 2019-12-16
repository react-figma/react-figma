import { RectangleProps } from './src/components/rectangle/Rectangle';
import { FrameNodeProps } from './src/components/frame/Frame';
import { TextProps } from './src/components/text/Text';
import { GroupProps } from './src/components/group/Group';
import { EllipseProps } from './src/components/ellipse/Ellipse';
import {InstanceProps} from "./src/components/component/Instance";
import {ComponentProps} from "./src/components/component/Component"

declare global {
    namespace JSX {
        interface IntrinsicElements {
            page: any;
            rectangle: RectangleProps;
            frame: FrameNodeProps;
            group: GroupProps;
            // @ts-ignore
            text: TextProps;
            component: ComponentProps;
            ellipse: EllipseProps;
            instance: InstanceProps
        }
    }
}
