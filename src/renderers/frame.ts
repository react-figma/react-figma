import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { geometryMixin } from '../mixins/geometryMixin';
import { childrenMixin } from '../mixins/childrenMixin';
import { yogaMixin } from '../mixins/yogaMixin';
import { page } from './page';

export const frame = node => async props => {
    const frameNode = node || figma.createFrame();

    await yogaMixin(frameNode)(props);
    baseNodeMixin(frameNode)(props);
    layoutMixin(frameNode)(props);
    geometryMixin(frameNode)(props);
    childrenMixin(frameNode)(props);

    return frameNode;
};
