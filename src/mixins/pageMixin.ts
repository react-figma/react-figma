import { propsAssign } from '../helpers/propsAssign';
import { PageProps } from '../components/page/Page';

export const pageMixin = propsAssign<PageProps, PageProps>(['backgrounds'], {
    backgrounds: []
});
