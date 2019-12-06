import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { refMixin } from '../mixins/refMixin';
import { exportMixin } from '../mixins/exportMixin';
import { blendMixin } from '../mixins/blendMixin';
import { InstanceProps } from '../components/component/Instance';

export const instance = (node: InstanceNode) => (props: InstanceProps) => {
    const instanceNode = node || props.component.createInstance();

    refMixin(instanceNode)(props);

    saveStyleMixin(instanceNode)(props);
    baseNodeMixin(instanceNode)(props);
    layoutMixin(instanceNode)(props);
    exportMixin(instanceNode)(props);
    blendMixin(instanceNode)(props);

    return instanceNode;
};
