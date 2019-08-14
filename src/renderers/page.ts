import { colorToRGB } from '../helpers/color';
import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { BaseNodeProps, LayoutProps } from '../types';

export interface RectangleProps extends BaseNodeProps {}

export const page = async props => {
    const page = figma.createPage();

    baseNodeMixin(page)(props);

    return page;
};
