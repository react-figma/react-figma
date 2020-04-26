import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { exportMixin } from '../mixins/exportMixin';
import { blendMixin } from '../mixins/blendMixin';
import { InstanceProps } from '../components/component/Instance';
import { autoLayoutMixin } from '../mixins/autoLayoutMixin';

export const instance = (node: InstanceNode) => (props: InstanceProps) => {
    const instanceNode = node || props.component.createInstance();

    saveStyleMixin(instanceNode)(props);
    baseNodeMixin(instanceNode)(props);
    layoutMixin(instanceNode)(props);
    exportMixin(instanceNode)(props);
    blendMixin(instanceNode)(props);
    autoLayoutMixin(instanceNode)(props);

    return instanceNode;
};
