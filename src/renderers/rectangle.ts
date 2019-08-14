import { colorToRGB } from '../helpers/color';
import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { BaseNodeProps, LayoutProps } from '../types';

export interface RectangleProps extends BaseNodeProps, LayoutProps {}

export const rectangle = async props => {
    const rect = figma.createRectangle();

    baseNodeMixin(rect)(props);
    layoutMixin(rect)(props);

    const { backgroundColor } = props.style;

    if (backgroundColor) {
        rect.fills = [{ type: 'SOLID', color: colorToRGB(backgroundColor) }];
    }

    return rect;
};
