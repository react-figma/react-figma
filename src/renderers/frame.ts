import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { geometryMixin } from '../mixins/geometryMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { refMixin } from '../mixins/refMixin';

export const frame = node => props => {
    const frameNode = node || figma.createFrame();

    refMixin(frameNode)(props);

    saveStyleMixin(frameNode)(props);
    baseNodeMixin(frameNode)(props);
    layoutMixin(frameNode)(props);
    geometryMixin(frameNode)(props);

    return frameNode;
};
