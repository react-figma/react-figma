import { layoutMixin } from '../mixins/layoutMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { exportMixin } from '../mixins/exportMixin';
import { blendMixin } from '../mixins/blendMixin';
import { frameMixin } from '../mixins/frameMixin';
import { sceneNodeMixin } from '../mixins/sceneNodeMixin';
import { publishableMixin } from '../mixins/publishableMixin';

const createNewComponentSet = () => {
    const component = figma.createComponent();
    component.setPluginData('isComponentStubElement', 'true');
    return figma.combineAsVariants([component], figma.currentPage);
};

export const componentset = node => props => {
    const componentSetNode = node || props.node || createNewComponentSet();

    saveStyleMixin(componentSetNode)(props);
    baseNodeMixin(componentSetNode)(props);
    layoutMixin(componentSetNode)(props);
    exportMixin(componentSetNode)(props);
    blendMixin(componentSetNode)(props);

    frameMixin(componentSetNode)(props);
    sceneNodeMixin(componentSetNode)(props);
    publishableMixin(componentSetNode)(props);

    return componentSetNode;
};
