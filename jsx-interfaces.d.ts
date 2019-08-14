import {RectangleProps} from "./src/renderers/rectangle";


declare global {
    namespace JSX {
        interface IntrinsicElements {
            page: any,
            rectangle: RectangleProps
        }
    }
}
