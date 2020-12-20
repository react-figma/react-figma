import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { exportMixin } from '../mixins/exportMixin';
import { sceneNodeMixin } from '../mixins/sceneNodeMixin';
import { SliceProps } from '../components/slice/Slice';
import { saveStyleMixin } from '../mixins/saveStyleMixin';

export const slice = (node: SliceNode) => (props: SliceProps) => {
    const sliceNode = node || figma.createSlice();

    baseNodeMixin(sliceNode)(props);
    saveStyleMixin(sliceNode)(props);
    layoutMixin(sliceNode)(props);
    exportMixin(sliceNode)(props);
    sceneNodeMixin(sliceNode)(props);

    return sliceNode;
};
