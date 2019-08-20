import { propsAssign } from '../helpers/propsAssign';

const fields = [
    'fills',
    'strokes',
    'strokeWeight',
    'strokeAlign',
    'strokeCap',
    'strokeJoin',
    'dashPattern',
    'fillStyleId',
    'strokeStyleId'
];

export const geometryMixin = propsAssign(fields);
