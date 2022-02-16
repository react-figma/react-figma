import { BlendProps } from '../types';
import { propsAssign } from '../helpers/propsAssign';

export const blendMixin = propsAssign<BlendProps, BlendProps>(
    ['blendMode', 'effects', 'isMask', 'opacity', 'effectStyleId'],
    {
        blendMode: 'NORMAL',
        effects: [],
        isMask: false,
        opacity: 1
    }
);
