import { propsAssign } from '../helpers/propsAssign';
import { PublishableProps } from '../types';

export const publishableMixin = propsAssign<PublishableProps, PublishableProps>(['description', 'documentationLinks'], {
    description: '',
    documentationLinks: []
});
