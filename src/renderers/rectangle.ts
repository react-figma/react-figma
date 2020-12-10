import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { BorderProps } from '../types';
import { geometryMixin } from '../mixins/geometryMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { propsAssign } from '../helpers/propsAssign';
import { RectangleProps } from '../components/rectangle/Rectangle';
import { cornerMixin } from '../mixins/cornerMixin';
import { exportMixin } from '../mixins/exportMixin';
import { blendMixin } from '../mixins/blendMixin';
import { rectangleCornerMixin } from '../mixins/rectangleCornerMixin';
import { sceneNodeMixin } from '../mixins/sceneNodeMixin';
import { constraintsMixin } from '../mixins/constraintsMixin';

export const rectangle = (node: RectangleNode) => (props: RectangleProps) => {
    const rect = node || props.node || figma.createRectangle();

    baseNodeMixin(rect)(props);
    saveStyleMixin(rect)(props);
    layoutMixin(rect)(props);
    geometryMixin(rect)(props);
    cornerMixin(rect)(props);
    rectangleCornerMixin(rect)(props);
    exportMixin(rect)(props);
    blendMixin(rect)(props);
    sceneNodeMixin(rect)(props);
    constraintsMixin(rect)(props);

    return rect;
};
