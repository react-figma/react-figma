import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { refMixin } from '../mixins/refMixin';
import { FrameNodeProps } from '../components/frame/Frame';
import { exportMixin } from '../mixins/exportMixin';
import { blendMixin } from '../mixins/blendMixin';
import { propsAssign } from '../helpers/propsAssign';
import { BorderProps } from '../types';
import { frameMixin } from '../mixins/frameMixin';
import { autoLayoutMixin } from '../mixins/autoLayoutMixin';
import { cornerMixin } from '../mixins/cornerMixin';
import { rectangleCornerMixin } from '../mixins/rectangleCornerMixin';
import { geometryMixin } from '../mixins/geometryMixin';
import { frameSpecificProps } from '../mixins/frameSpecificMixin';

export const frame = (node: FrameNode) => (props: FrameNodeProps) => {
    const frameNode = node || props.node || figma.createFrame();

    refMixin(frameNode)(props);

    saveStyleMixin(frameNode)(props);
    baseNodeMixin(frameNode)(props);
    layoutMixin(frameNode)(props);
    exportMixin(frameNode)(props);
    blendMixin(frameNode)(props);
    geometryMixin(frameNode)(props);
    cornerMixin(frameNode)(props);
    rectangleCornerMixin(frameNode)(props);
    autoLayoutMixin(frameNode)(props);

    frameMixin(frameNode)(props);
    frameSpecificProps(frameNode)(props);

    return frameNode;
};
