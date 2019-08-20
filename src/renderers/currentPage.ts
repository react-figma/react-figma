import { childrenMixin } from '../mixins/childrenMixin';
import { yogaMixin } from '../mixins/yogaMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';

export const currentPage = node => async props => {
    const page = figma.currentPage;

    await yogaMixin(page)(props);
    saveStyleMixin(page)(props);
    childrenMixin(page)(props);

    return page;
};
