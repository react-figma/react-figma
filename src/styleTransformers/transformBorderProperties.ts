import { BorderProps, CornerProps, GeometryProps } from '../types';
import { transformSize, TSize } from '../helpers/size';
import { colorToPaint } from './transformColors';

export interface BorderStyleProperties {
    borderColor: string;
    borderWidth: number;

    borderRadius: TSize;
    borderBottomLeftRadius: TSize;
    borderBottomRightRadius: TSize;
    borderTopLeftRadius: TSize;
    borderTopRightRadius: TSize;
}

export const transformBorderStyleProperties = (
    styles?: Partial<BorderStyleProperties>
): BorderProps & GeometryProps => {
    if (!styles) {
        return {};
    }

    const props: BorderProps & GeometryProps & CornerProps = {};

    if (styles.borderRadius) {
        props.cornerRadius = transformSize(styles.borderRadius);
    }

    if (styles.borderTopLeftRadius) {
        props.topLeftRadius = transformSize(styles.borderTopLeftRadius);
    }

    if (styles.borderTopRightRadius) {
        props.topRightRadius = transformSize(styles.borderTopRightRadius);
    }

    if (styles.borderBottomLeftRadius) {
        props.bottomLeftRadius = transformSize(styles.borderBottomLeftRadius);
    }

    if (styles.borderBottomRightRadius) {
        props.bottomRightRadius = transformSize(styles.borderBottomRightRadius);
    }

    if (styles.borderColor) {
        props.strokes = [colorToPaint(styles.borderColor)];
    }

    if (styles.borderWidth) {
        props.strokeWeight = transformSize(styles.borderWidth);
    }

    return props;
};
