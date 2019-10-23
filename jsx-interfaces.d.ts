import { RectangleProps } from './src/components/rectangle/Rectangle';
import { FrameProps } from './src/components/frame/Frame';
import { TextProps } from './src/components/text/Text';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            currentPage: any;
            page: any;
            rectangle: RectangleProps;
            frame: FrameProps;
            group: any;
            // @ts-ignore
            text: TextProps;
            component: any;
        }
    }
}
