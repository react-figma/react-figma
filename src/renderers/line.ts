import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { geometryMixin } from '../mixins/geometryMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { LineProps } from '../components/line/Line';
import { exportMixin } from '../mixins/exportMixin';
import { blendMixin } from '../mixins/blendMixin';
import { sceneNodeMixin } from '../mixins/sceneNodeMixin';
import { constraintsMixin } from '../mixins/constraintsMixin';

export const line = (node: RectangleNode) => (props: LineProps) => {
    const lineNode = node || props.node || figma.createLine();

    baseNodeMixin(lineNode)(props);
    saveStyleMixin(lineNode)(props);
    layoutMixin(lineNode)(props);
    geometryMixin(lineNode)(props);
    exportMixin(lineNode)(props);
    blendMixin(lineNode)(props);
    sceneNodeMixin(lineNode)(props);
    constraintsMixin(lineNode)(props);

    return lineNode;
};
