import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { BaseNodeProps, LayoutProps } from '../types';
import { geometryMixin } from '../mixins/geometryMixin';
import { fillsPreprocessor } from '../helpers/fillsPreprocessor';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { refMixin } from '../mixins/refMixin';
import { propsAssign } from '../helpers/propsAssign';

const rectangleNodePropsAssign = propsAssign<RectangleNode>([
    'topLeftRadius',
    'topRightRadius',
    'bottomLeftRadius',
    'bottomRightRadius'
]);

export const rectangle = node => props => {
    const rect = node || figma.createRectangle();

    refMixin(rect)(props);
    baseNodeMixin(rect)(props);
    saveStyleMixin(rect)(props);
    layoutMixin(rect)(props);
    geometryMixin(rect)(props);

    rectangleNodePropsAssign(rect)(props);

    return rect;
};
