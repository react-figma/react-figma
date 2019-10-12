import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { refMixin } from '../mixins/refMixin';
import { FrameProps } from '../components/frame/Frame';
import { exportMixin } from '../mixins/exportMixin';
import { blendMixin } from '../mixins/blendMixin';

export const frame = (node: FrameNode) => (props: FrameProps) => {
    const frameNode = node || figma.createFrame();

    refMixin(frameNode)(props);

    saveStyleMixin(frameNode)(props);
    baseNodeMixin(frameNode)(props);
    layoutMixin(frameNode)(props);
    exportMixin(frameNode)(props);
    blendMixin(frameNode)(props);

    return frameNode;
};
