import {RectangleProps} from "./src/renderers/rectangle";


declare global {
    namespace JSX {
        interface IntrinsicElements {
            currentPage: any,
            page: any,
            rectangle: RectangleProps
        }
    }
}
