import { BlendProps } from '../types';

export const transformBlendProperties = (styles?: BlendProps): BlendProps => {
    if (!styles) {
        return {};
    }

    const blendProps: BlendProps = {};

    if (styles.opacity) {
        blendProps.opacity = styles.opacity;
    }
    if (styles.blendMode) {
        blendProps.blendMode = styles.blendMode;
    }
    if (styles.isMask) {
        blendProps.isMask = styles.isMask;
    }
    if (styles.effects) {
        blendProps.effects = styles.effects;
    }
    if (styles.effectStyleId) {
        blendProps.effectStyleId = styles.effectStyleId;
    }

    return blendProps;
};
