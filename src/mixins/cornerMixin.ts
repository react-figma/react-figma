import { CornerProps } from '../types';
import { propsAssign } from '../helpers/propsAssign';

export const cornerMixin = propsAssign<CornerProps>(['cornerRadius', 'cornerSmoothing']);
