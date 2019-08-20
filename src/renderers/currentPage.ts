import { childrenMixin } from '../mixins/childrenMixin';
import { yogaMixin } from '../mixins/yogaMixin';

export const currentPage = node => async props => {
    const page = figma.currentPage;

    await yogaMixin(page)(props);
    childrenMixin(page)(props);

    return page;
};
