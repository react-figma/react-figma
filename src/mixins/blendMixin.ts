import { BlendProps } from '../types';
import { propsAssign } from '../helpers/propsAssign';

export const blendMixin = propsAssign<BlendProps, BlendProps>(
    ['blendMode', 'effectStyleId', 'effects', 'isMask', 'opacity'],
    {
        blendMode: 'NORMAL',
        effects: [],
        isMask: false,
        opacity: 1,
    }
);
