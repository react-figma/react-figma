import { propsAssign } from '../helpers/propsAssign';

export const geometryMixin = propsAssign<GeometryMixin>([
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
