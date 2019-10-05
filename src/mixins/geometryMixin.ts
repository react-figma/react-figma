import { propsAssign } from '../helpers/propsAssign';
import { GeometryProps } from '../types';

export const geometryMixin = propsAssign<GeometryProps>([
    'fills',
    'strokes',
    'strokeWeight',
    'strokeAlign',
    'strokeCap',
    'strokeJoin',
    'dashPattern',
    'fillStyleId',
    'strokeStyleId'
]);
