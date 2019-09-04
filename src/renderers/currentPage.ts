import { childrenMixin } from '../mixins/childrenMixin';
import { yogaMixin } from '../mixins/yogaMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';

export const currentPage = node => props => {
    const page = node || figma.currentPage;

    saveStyleMixin(page)(props);
    childrenMixin(page)(props);

    return page;
};
