import { colorToRGBA } from '../helpers/color';
import { Color } from '../types';

export const transformShadowToEffect = (styles: {
    shadowOffset?: { width: number; height: number };
    shadowOpacity?: number;
    shadowRadius?: number;
    shadowColor?: Color;
}): ShadowEffect => {
    return {
        type: 'DROP_SHADOW',
        color: colorToRGBA(styles.shadowColor, styles.shadowOpacity || 1),
        offset: styles.shadowOffset
            ? {
                  x: styles.shadowOffset.width,
                  y: styles.shadowOffset.height
              }
            : {
                  x: 0,
                  y: 0
              },
        radius: styles.shadowRadius || 0,
        visible: true,
        blendMode: 'NORMAL'
    };
};
