import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { ComponentProps } from '../components/component/Component';
import { exportMixin } from '../mixins/exportMixin';
import { autoLayoutMixin } from '../mixins/autoLayoutMixin';
import { sceneNodeMixin } from '../mixins/sceneNodeMixin';
import { constraintsMixin } from '../mixins/constraintsMixin';

export const component = (node: ComponentNode) => (props: ComponentProps) => {
    const componentNode = node || figma.createComponent();

    saveStyleMixin(componentNode)(props);
    baseNodeMixin(componentNode)(props);
    layoutMixin(componentNode)(props);
    exportMixin(componentNode)(props);
    constraintsMixin(componentNode)(props);
    autoLayoutMixin(componentNode)(props);
    sceneNodeMixin(componentNode)(props);

    return componentNode;
};
