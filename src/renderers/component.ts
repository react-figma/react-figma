import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { refMixin } from '../mixins/refMixin';
import { ComponentProps } from '../components/component/Component';

export const component = (node: ComponentNode) => (props: ComponentProps) => {
    const componentNode = node || figma.createComponent();

    refMixin(componentNode)(props);

    saveStyleMixin(componentNode)(props);
    baseNodeMixin(componentNode)(props);
    layoutMixin(componentNode)(props);

    return componentNode;
};
