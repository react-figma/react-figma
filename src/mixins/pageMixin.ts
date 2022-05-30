import { propsAssign } from '../helpers/propsAssign';
import { PageProps } from '../components/page/Page';

export const pageMixin = propsAssign<PageProps, PageProps>(['backgrounds'], {
    backgrounds: [
        {
            type: 'SOLID',
            visible: true,
            opacity: 1,
            blendMode: 'NORMAL',
            color: {
                r: 0.9607843160629272,
                g: 0.9607843160629272,
                b: 0.9607843160629272
            }
        }
    ]
});
