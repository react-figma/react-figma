import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { BaseNodeProps, LayoutProps } from '../types';
import { geometryMixin } from '../mixins/geometryMixin';

export interface RectangleProps extends BaseNodeProps, LayoutProps {}

export const rectangle = async props => {
    const rect = figma.createRectangle();

    baseNodeMixin(rect)(props);
    layoutMixin(rect)(props);
    geometryMixin(rect)(props);

    return rect;
};
