import { layoutMixin } from '../mixins/layoutMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { exportMixin } from '../mixins/exportMixin';
import { blendMixin } from '../mixins/blendMixin';
import { frameMixin } from '../mixins/frameMixin';
import { sceneNodeMixin } from '../mixins/sceneNodeMixin';

const createNewGroup = () => {
    const rect = figma.createRectangle();
    rect.setPluginData('isGroupStubElement', 'true');
    return figma.group([rect], figma.currentPage);
};

export const group = (node) => (props) => {
    const frameNode = node || props.node || createNewGroup();

    saveStyleMixin(frameNode)(props);
    baseNodeMixin(frameNode)(props);
    layoutMixin(frameNode)(props);
    exportMixin(frameNode)(props);
    blendMixin(frameNode)(props);

    frameMixin(frameNode)(props);
    sceneNodeMixin(frameNode)(props);

    return frameNode;
};
