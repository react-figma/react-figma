import { layoutMixin } from '../../mixins/layoutMixin';
import { refMixin } from '../../mixins/refMixin';
import { saveStyleMixin } from '../../mixins/saveStyleMixin';
import { baseNodeMixin } from '../../mixins/baseNodeMixin';
import { exportMixin } from '../../mixins/exportMixin';
import { blendMixin } from '../../mixins/blendMixin';
import { PregroupNode } from './pregroupNode';

export const group = node => props => {
    let newNode;
    const didMountHandler = () => {
        refMixin(newNode.figmaNode)(props);
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
        const groupNode = newNode.figmaNode;

        saveStyleMixin(groupNode)(props);
        baseNodeMixin(groupNode)(props);
        layoutMixin(groupNode)(props);
        exportMixin(groupNode)(props);
        blendMixin(groupNode)(props);
    }

    return newNode;
};
