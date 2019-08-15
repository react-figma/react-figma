import { GeometryProps } from '../types';

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

export const geometryMixin = (node: GeometryMixin) => (props: GeometryProps) => {
    fields.forEach(field => {
        if (props[field]) {
            node[field] = props[field];
        }
    });
};
