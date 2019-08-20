import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { BaseNodeProps, LayoutProps } from '../types';
import { geometryMixin } from '../mixins/geometryMixin';
import { fillsPreprocessor } from '../helpers/fillsPreprocessor';
import { saveStyleMixin } from '../mixins/saveStyleMixin';

export interface RectangleProps extends BaseNodeProps, LayoutProps {}

export const rectangle = node => async props => {
    const rect = node || figma.createRectangle();

    props.fills = await fillsPreprocessor(props);

    baseNodeMixin(rect)(props);
    saveStyleMixin(rect)(props);
    layoutMixin(rect)(props);
    geometryMixin(rect)(props);

    return rect;
};
