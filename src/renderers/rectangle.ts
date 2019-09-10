import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { BaseNodeProps, LayoutProps } from '../types';
import { geometryMixin } from '../mixins/geometryMixin';
import { fillsPreprocessor } from '../helpers/fillsPreprocessor';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { refMixin } from '../mixins/refMixin';

export interface RectangleProps extends BaseNodeProps, LayoutProps {}

export const rectangle = node => props => {
    const rect = node || figma.createRectangle();

    refMixin(rect)(props);
    baseNodeMixin(rect)(props);
    saveStyleMixin(rect)(props);
    layoutMixin(rect)(props);
    geometryMixin(rect)(props);

    return rect;
};
