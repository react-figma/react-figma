import { RectangleProps } from './src/renderers/rectangle';
import { FrameProps } from './src/components/frame/Frame';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            currentPage: any;
            page: any;
            rectangle: RectangleProps;
            frame: FrameProps;
        }
    }
}
