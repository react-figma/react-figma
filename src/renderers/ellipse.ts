import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { geometryMixin } from '../mixins/geometryMixin';
import { refMixin } from '../mixins/refMixin';
import { cornerMixin } from '../mixins/cornerMixin';
import { exportMixin } from '../mixins/exportMixin';
import { blendMixin } from '../mixins/blendMixin';
import { EllipseNodeProps } from '../components/ellipse/Ellipse';

export const ellipse = (node: EllipseNode) => (props: EllipseNodeProps) => {
    const ellipseNode = node || figma.createEllipse();

    refMixin(ellipseNode)(props);
    baseNodeMixin(ellipseNode)(props);
    layoutMixin(ellipseNode)(props);
    geometryMixin(ellipseNode)(props);
    exportMixin(ellipseNode)(props);
    cornerMixin(ellipseNode)(props);
    blendMixin(ellipseNode)(props);

    return ellipseNode;
};
