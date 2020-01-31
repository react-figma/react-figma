import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { refMixin } from '../mixins/refMixin';
import { ComponentProps } from '../components/component/Component';
import { exportMixin } from '../mixins/exportMixin';
import { blendMixin } from '../mixins/blendMixin';
import { autoLayoutMixin } from '../mixins/autoLayoutMixin';

export const component = (node: ComponentNode) => (props: ComponentProps) => {
    const componentNode = node || figma.createComponent();

    refMixin(componentNode)(props);

    saveStyleMixin(componentNode)(props);
    baseNodeMixin(componentNode)(props);
    layoutMixin(componentNode)(props);
    exportMixin(componentNode)(props);
    blendMixin(componentNode)(props);
    autoLayoutMixin(componentNode)(props);

    return componentNode;
};
