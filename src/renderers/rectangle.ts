import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { BorderProps } from '../types';
import { geometryMixin } from '../mixins/geometryMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { refMixin } from '../mixins/refMixin';
import { propsAssign } from '../helpers/propsAssign';
import { RectangleProps } from '../components/rectangle/Rectangle';
import { cornerMixin } from '../mixins/cornerMixin';
import { exportMixin } from '../mixins/exportMixin';

const rectangleNodePropsAssign = propsAssign<BorderProps>([
    'topLeftRadius',
    'topRightRadius',
    'bottomLeftRadius',
    'bottomRightRadius'
]);

export const rectangle = (node: RectangleNode) => (props: RectangleProps) => {
    const rect = node || figma.createRectangle();

    refMixin(rect)(props);
    baseNodeMixin(rect)(props);
    saveStyleMixin(rect)(props);
    layoutMixin(rect)(props);
    geometryMixin(rect)(props);
    cornerMixin(rect)(props);
    exportMixin(rect)(props);

    rectangleNodePropsAssign(rect)(props);

    return rect;
};
