import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { exportMixin } from '../mixins/exportMixin';
import { InstanceProps } from '../components/component/Instance';
import { autoLayoutMixin } from '../mixins/autoLayoutMixin';
import { sceneNodeMixin } from '../mixins/sceneNodeMixin';

export const instance = (node: InstanceNode) => (props: InstanceProps) => {
    const instanceNode = node || props.component.createInstance();

    saveStyleMixin(instanceNode)(props);
    baseNodeMixin(instanceNode)(props);
    layoutMixin(instanceNode)(props);
    exportMixin(instanceNode)(props);
    autoLayoutMixin(instanceNode)(props);
    sceneNodeMixin(instanceNode)(props);

    return instanceNode;
};
