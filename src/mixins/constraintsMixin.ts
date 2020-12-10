import { ConstraintsProps } from '../types';
import { propsAssign } from '../helpers/propsAssign';

export const constraintsMixin = propsAssign<ConstraintsProps, ConstraintsProps>(['constraints'], {
    constraints: {
        horizontal: 'MIN',
        vertical: 'MIN'
    }
});
