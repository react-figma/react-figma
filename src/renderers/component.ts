import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { ComponentProps } from '../components/component/Component';
import { exportMixin } from '../mixins/exportMixin';
import { blendMixin } from '../mixins/blendMixin';
import { frameMixin } from '../mixins/frameMixin';
import { autoLayoutMixin } from '../mixins/autoLayoutMixin';
import { cornerMixin } from '../mixins/cornerMixin';
import { rectangleCornerMixin } from '../mixins/rectangleCornerMixin';
import { geometryMixin } from '../mixins/geometryMixin';
import { frameSpecificProps } from '../mixins/frameSpecificMixin';
import { sceneNodeMixin } from '../mixins/sceneNodeMixin';
import { constraintsMixin } from '../mixins/constraintsMixin';
import { publishableMixin } from '../mixins/publishableMixin';

export const component = (node: ComponentNode) => (props: ComponentProps) => {
    const componentNode = node || figma.createComponent();

    saveStyleMixin(componentNode)(props);
    baseNodeMixin(componentNode)(props);
    layoutMixin(componentNode)(props);
    exportMixin(componentNode)(props);
    blendMixin(componentNode)(props);
    geometryMixin(componentNode)(props);
    cornerMixin(componentNode)(props);
    rectangleCornerMixin(componentNode)(props);
    constraintsMixin(componentNode)(props);
    autoLayoutMixin(componentNode)(props);

    frameMixin(componentNode)(props);
    frameSpecificProps(componentNode)(props);
    sceneNodeMixin(componentNode)(props);
    publishableMixin(componentNode)(props);

    return componentNode;
};
