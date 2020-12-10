import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { exportMixin } from '../mixins/exportMixin';
import { blendMixin } from '../mixins/blendMixin';
import { frameMixin } from '../mixins/frameMixin';
import { SvgNodeProps } from '../components/svg/Svg';
import { hashCode } from '../helpers/hashCode';
import { sceneNodeMixin } from '../mixins/sceneNodeMixin';
import { safeGetPluginData } from '../helpers/safeGetPluginData';
import { constraintsMixin } from '../mixins/constraintsMixin';

const createNodeFromSvg = source => {
    const node = figma.createNodeFromSvg(source);
    node.setPluginData('svgHash', hashCode(source));
    return node;
};

export const svg = node => (props: SvgNodeProps) => {
    let frameNode = node || props.node || createNodeFromSvg(props.source);

    const savedHash = safeGetPluginData('svgHash')(frameNode);
    if (savedHash != hashCode(props.source)) {
        const newSvg = figma.createNodeFromSvg(props.source);
        layoutMixin(newSvg)(props);
        frameNode.children.forEach(child => child.remove());
        newSvg.children.forEach(child => {
            frameNode.appendChild(child);
        });
        newSvg.remove();
        node.setPluginData('svgHash', hashCode(props.source));
    }

    saveStyleMixin(frameNode)(props);
    baseNodeMixin(frameNode)(props);
    layoutMixin(frameNode)(props);
    exportMixin(frameNode)(props);
    blendMixin(frameNode)(props);

    frameMixin(frameNode)(props);
    sceneNodeMixin(frameNode)(props);
    constraintsMixin(frameNode)(props);

    return frameNode;
};
