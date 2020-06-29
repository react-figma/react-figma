import { CornerProps } from '../types';
import { propsAssign } from '../helpers/propsAssign';

export const cornerMixin = propsAssign<CornerProps, CornerProps>(['cornerRadius', 'cornerSmoothing'], {
    cornerRadius: 0,
    cornerSmoothing: 0,
});
