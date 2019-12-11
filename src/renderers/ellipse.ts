import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { geometryMixin } from '../mixins/geometryMixin';
import { refMixin } from '../mixins/refMixin';
import { cornerMixin } from '../mixins/cornerMixin';
import { exportMixin } from '../mixins/exportMixin';
import { blendMixin } from '../mixins/blendMixin';
import { EllipseProps } from '../components/ellipse/Ellipse';
import { propsAssign } from '../helpers/propsAssign';

const ellipseNodePropsAssign = propsAssign<EllipseProps>(['arcData']);

export const ellipse = (node: EllipseNode) => (props: EllipseProps) => {
    const ellipseNode = node || props.node || figma.createEllipse();

    refMixin(ellipseNode)(props);
    baseNodeMixin(ellipseNode)(props);
    layoutMixin(ellipseNode)(props);
    geometryMixin(ellipseNode)(props);
    exportMixin(ellipseNode)(props);
    cornerMixin(ellipseNode)(props);
    blendMixin(ellipseNode)(props);

    ellipseNodePropsAssign(ellipseNode)(props);

    return ellipseNode;
};
