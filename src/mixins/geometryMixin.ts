import { propsAssign } from '../helpers/propsAssign';
import { GeometryProps } from '../types';

export const geometryMixin = propsAssign<GeometryProps, GeometryProps>(
    [
        'fills',
        'strokes',
        'strokeWeight',
        'strokeAlign',
        'strokeCap',
        'strokeJoin',
        'dashPattern',
        'fillStyleId',
        'strokeStyleId',
    ],
    {
        fills: [],
        strokes: [],
        strokeWeight: 0,
        strokeAlign: 'INSIDE',
        strokeCap: 'NONE',
    }
);
