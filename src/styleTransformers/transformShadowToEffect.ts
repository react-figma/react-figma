import { colorToRGBA } from './transformColors';
import { ShadowProperties, BlendStyleProperties } from './transformBlendProperties';

export const transformShadowToEffect = (styles: Partial<BlendStyleProperties>): ShadowEffect[] => {
    let shadows: Partial<ShadowProperties>[] = [styles];
    if ('shadows' in styles && Array.isArray(styles.shadows)) {
        shadows = styles.shadows;
    }
    return shadows.map(shadow => ({
        type: shadow.shadowType != null ? shadow.shadowType : 'DROP_SHADOW',
        color: colorToRGBA(shadow.shadowColor, shadow.shadowOpacity),
        offset: shadow.shadowOffset
            ? {
                  x: shadow.shadowOffset.width,
                  y: shadow.shadowOffset.height
              }
            : {
                  x: 0,
                  y: 0
              },
        radius: shadow.shadowRadius || 0,
        spread: shadow.shadowSpread || 0,
        visible: true,
        blendMode: 'NORMAL'
    }));
};
