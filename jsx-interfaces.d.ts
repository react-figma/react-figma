import { RectangleProps } from './src/components/rectangle/Rectangle';
import { FrameNodeProps } from './src/components/frame/Frame';
import { TextProps } from './src/components/text/Text';
import { GroupProps } from './src/components/group/Group';
import { EllipseProps } from './src/components/ellipse/Ellipse';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            currentPage: any;
            page: any;
            rectangle: RectangleProps;
            frame: FrameNodeProps;
            group: GroupProps;
            // @ts-ignore
            text: TextProps;
            component: any;
            ellipse: EllipseProps;
            instance: any
        }
    }
}
