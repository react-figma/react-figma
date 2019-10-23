import { layoutMixin } from '../mixins/layoutMixin';
import { refMixin } from '../mixins/refMixin';

export const group = node => props => {
    const newNode = node || {
        type: 'PRE_GROUP',
        groupNode: null,
        children: [],
        setPluginData(key: string, value: string): void {},
        appendChild(childNode) {
            this.children.push(childNode);
        },
        didMount: () => {
            refMixin(newNode.groupNode)(props);
        }
    };

    if (newNode.groupNode) {
        const groupNode = newNode.groupNode;
        layoutMixin(groupNode)(props);
    }

    return newNode;
};
