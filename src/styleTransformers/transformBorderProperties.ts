import { BorderProps, GeometryProps } from '../types';
import { TSize, transformSize } from '../helpers/size';
import { colorToRGB } from '../helpers/color';

export type BorderStyleProperties = {
    borderColor?: string;
    borderWidth?: TSize;

    borderRadius?: TSize;
    borderBottomLeftRadius?: TSize;
    borderBottomRightRadius?: TSize;
    borderTopLeftRadius?: TSize;
    borderTopRightRadius?: TSize;
};

export const transformBorderStyleProperties = (styles?: BorderStyleProperties): BorderProps & GeometryProps => {
    if (!styles) {
        return {};
    }

    const props: BorderProps & GeometryProps = {};

    if (styles.borderRadius) {
        props.topLeftRadius = transformSize(styles.borderRadius);
        props.topRightRadius = transformSize(styles.borderRadius);
        props.bottomLeftRadius = transformSize(styles.borderRadius);
        props.bottomRightRadius = transformSize(styles.borderRadius);
    }
    if (styles.borderTopLeftRadius) {
        props.topLeftRadius = transformSize(styles.borderTopLeftRadius);
    }
    if (styles.borderTopRightRadius) {
        props.topLeftRadius = transformSize(styles.borderTopRightRadius);
    }
    if (styles.borderBottomLeftRadius) {
        props.topLeftRadius = transformSize(styles.borderBottomLeftRadius);
    }
    if (styles.borderBottomRightRadius) {
        props.topLeftRadius = transformSize(styles.borderBottomRightRadius);
    }

    if (styles.borderColor) {
        props.strokes = [
            {
                type: 'SOLID',
                color: colorToRGB(styles.borderColor)
            }
        ];
    }

    if (styles.borderWidth) {
        props.strokeWeight = transformSize(styles.borderWidth);
    }

    return props;
};
