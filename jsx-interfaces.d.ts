import { RectangleProps } from './src/components/rectangle/Rectangle';
import { FrameNodeProps } from './src/components/frame/Frame';
import { TextProps } from './src/components/text/Text';
import { GroupProps } from './src/components/group/Group';
import { EllipseProps } from './src/components/ellipse/Ellipse';
import { InstanceProps } from './src/components/component/Instance';
import { ComponentProps } from './src/components/component/Component';
import { StarProps } from './src/components/star/Star';
import { VectorProps } from './src/components/vector/Vector';
import { SliceProps } from './src/components/slice/Slice';
import {ComponentSetProps} from "./src/components/component/ComponentSet";


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
            vector: VectorProps;
            instance: InstanceProps;
            slice: SliceProps;
            componentset: ComponentSetProps
        }
    }
}
