import { colorToRGBA } from './transformColors';
import { BlurProperties, BlendStyleProperties } from './transformBlendProperties';

export const transformBlurToEffect = (styles: Partial<BlendStyleProperties>): BlurEffect[] => {
    let blurs: Partial<BlurProperties>[] = [styles];
    if ('blurs' in styles && Array.isArray(styles.shadows)) {
        blurs = styles.blurs;
    }
    return blurs.map(blur => ({
        type: blur.blurType != null ? blur.blurType : 'LAYER_BLUR',
        radius: blur.blurRadius || 0,
        visible: true
    }));
};
