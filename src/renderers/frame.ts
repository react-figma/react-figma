import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { geometryMixin } from '../mixins/geometryMixin';
import { childrenMixin } from '../mixins/childrenMixin';
import { yogaMixin } from '../mixins/yogaMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';

export const frame = node => props => {
    const frameNode = node || figma.createFrame();

    saveStyleMixin(frameNode)(props);
    baseNodeMixin(frameNode)(props);
    layoutMixin(frameNode)(props);
    geometryMixin(frameNode)(props);
    childrenMixin(frameNode)(props);

    return frameNode;
};
