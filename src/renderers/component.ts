import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { geometryMixin } from '../mixins/geometryMixin';
import { childrenMixin } from '../mixins/childrenMixin';
import { yogaMixin } from '../mixins/yogaMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';

export const component = node => async props => {
    const componentNode = node || figma.createComponent();

    await yogaMixin(componentNode)(props);
    saveStyleMixin(componentNode)(props);
    baseNodeMixin(componentNode)(props);
    layoutMixin(componentNode)(props);
    geometryMixin(componentNode)(props);
    childrenMixin(componentNode)(props);

    return componentNode;
};
