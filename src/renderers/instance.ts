import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { refMixin } from '../mixins/refMixin';
import { exportMixin } from '../mixins/exportMixin';
import { blendMixin } from '../mixins/blendMixin';
import { InstanceProps } from '../components/component/Instance';
import * as renderers from './index';
import { StyleSheet } from '..';
import { transformLayoutStyleProperties } from '../styleTransformers/transformLayoutStyleProperties';
import { transformGeometryStyleProperties } from '../styleTransformers/transformGeometryStyleProperties';
import { transformBorderStyleProperties } from '../styleTransformers/transformBorderProperties';
import { transformBlendProperties } from '../styleTransformers/transformBlendProperties';
import { transformTextStyleProperties } from '../styleTransformers/transformTextStyleProperties';

const handleOverrides = (overrides, children) => {
    children.forEach(child => {
        const override = overrides[child.name];
        if (override) {
            const style = StyleSheet.flatten(override.style);
            const transformedStyle = {
                ...transformGeometryStyleProperties('fills', style),
                ...transformBorderStyleProperties(style),
                ...transformBlendProperties(style),
                ...((child.type === 'TEXT' && transformTextStyleProperties(style)) || {})
            };
            renderers[child.type.toLowerCase()](child)({ ...override, ...transformedStyle });
        }
        if (child.children) {
            handleOverrides(overrides, child.children);
        }
    });
};

export const instance = (node: InstanceNode) => (props: InstanceProps) => {
    const instanceNode = node || props.component.createInstance();

    if (props.overrides) {
        handleOverrides(props.overrides, instanceNode.children);
    }

    refMixin(instanceNode)(props);

    saveStyleMixin(instanceNode)(props);
    baseNodeMixin(instanceNode)(props);
    layoutMixin(instanceNode)(props);
    exportMixin(instanceNode)(props);
    blendMixin(instanceNode)(props);

    return instanceNode;
};
