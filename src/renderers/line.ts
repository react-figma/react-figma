import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { geometryMixin } from '../mixins/geometryMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { refMixin } from '../mixins/refMixin';
import { LineProps } from '../components/line/Line';
import { exportMixin } from '../mixins/exportMixin';
import { blendMixin } from '../mixins/blendMixin';

export const line = (node: RectangleNode) => (props: LineProps) => {
    const lineNode = node || figma.createLine();

    refMixin(lineNode)(props);
    baseNodeMixin(lineNode)(props);
    saveStyleMixin(lineNode)(props);
    layoutMixin(lineNode)(props);
    geometryMixin(lineNode)(props);
    exportMixin(lineNode)(props);
    blendMixin(lineNode)(props);

    return lineNode;
};
