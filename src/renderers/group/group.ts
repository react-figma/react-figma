import { layoutMixin } from '../../mixins/layoutMixin';
import { refMixin } from '../../mixins/refMixin';
import { saveStyleMixin } from '../../mixins/saveStyleMixin';
import { baseNodeMixin } from '../../mixins/baseNodeMixin';
import { exportMixin } from '../../mixins/exportMixin';
import { blendMixin } from '../../mixins/blendMixin';
import { PregroupNode } from './pregroupNode';
import { geometryMixin } from '../../mixins/geometryMixin';

export const group = node => props => {
    let newNode;

    const applyProps = () => {
        refMixin(newNode.figmaNode)(props);

        saveStyleMixin(newNode.figmaNode)(props);
        baseNodeMixin(newNode.figmaNode)(props);
        layoutMixin(newNode.figmaNode)(props);
        exportMixin(newNode.figmaNode)(props);
        geometryMixin(newNode.figmaNode)(props);
        blendMixin(newNode.figmaNode)(props);
    };

    const didMountHandler = () => {
        applyProps();
    };

    if (node && node.type === 'GROUP') {
        // If the existing group node is passed
        // it means that it's the hydration case
        // and we should create PregroupNode from existing group
        newNode = PregroupNode.createFromGroupNode(node, didMountHandler);
    } else {
        newNode = node || new PregroupNode(didMountHandler);
    }

    if (newNode.figmaNode) {
        applyProps();
    }

    return newNode;
};
