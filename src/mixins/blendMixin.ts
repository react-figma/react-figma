import { BlendProps } from '../types';
import { propsAssign } from '../helpers/propsAssign';

export const blendMixin = propsAssign<BlendProps>(['blendMode', 'effectStyleId', 'effects', 'isMask', 'opacity']);
