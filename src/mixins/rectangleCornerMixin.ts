import { BorderProps } from '../types';
import { propsAssign } from '../helpers/propsAssign';

export const rectangleCornerMixin = propsAssign<BorderProps>([
    'topLeftRadius',
    'topRightRadius',
    'bottomLeftRadius',
    'bottomRightRadius'
]);
