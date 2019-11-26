import { BlendProps, Color } from '../types';
import { colorToRGBA } from './transformColors';
import { transformShadowToEffect } from './transformShadowToEffect';

export type CSSBlendMode =
    | 'normal'
    | 'multiply'
    | 'screen'
    | 'overlay'
    | 'darken'
    | 'lighten'
    | 'color-dodge'
    | 'color-burn'
    | 'hard-light'
    | 'soft-light'
    | 'difference'
    | 'exclusion'
    | 'hue'
    | 'saturation'
    | 'color'
    | 'luminosity';

export interface BlendStyleProperties {
    opacity?: number;
    blendMode?: CSSBlendMode;
    shadowColor?: Color;
    shadowOffset?: { width: number; height: number };
    shadowOpacity?: number;
    shadowRadius?: number;
}

const transofrmBlendMode = (cssBlendMode: CSSBlendMode): BlendMode => {
    /**
     * TODO: Missing modes - PASS_THROUGH, LINEAR_BURN, LINEAR_DODGE
     */
    switch (cssBlendMode) {
        case 'normal':
            return 'NORMAL';
        case 'darken':
            return 'DARKEN';
        case 'multiply':
            return 'MULTIPLY';
        case 'color-burn':
            return 'COLOR_BURN';
        case 'lighten':
            return 'LIGHTEN';
        case 'screen':
            return 'SCREEN';
        case 'color-dodge':
            return 'COLOR_DODGE';
        case 'overlay':
            return 'OVERLAY';
        case 'soft-light':
            return 'SOFT_LIGHT';
        case 'hard-light':
            return 'HARD_LIGHT';
        case 'difference':
            return 'DIFFERENCE';
        case 'exclusion':
            return 'EXCLUSION';
        case 'hue':
            return 'HUE';
        case 'saturation':
            return 'SATURATION';
        case 'color':
            return 'COLOR';
        case 'luminosity':
            return 'LUMINOSITY';
        default:
            break;
    }
};

export const transformBlendProperties = (styles?: BlendStyleProperties): BlendProps => {
    if (!styles) {
        return {};
    }

    const blendProps: BlendProps = {};

    if (styles.opacity) {
        blendProps.opacity = styles.opacity;
    }
    if (styles.blendMode) {
        blendProps.blendMode = transofrmBlendMode(styles.blendMode);
    }

    if (styles.shadowColor) {
        blendProps.effects = [transformShadowToEffect(styles)];
    }

    return blendProps;
};
