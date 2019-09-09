import { childrenMixin } from '../mixins/childrenMixin';
import { yogaMixin } from '../mixins/yogaMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { refMixin } from '../mixins/refMixin';

export const currentPage = node => props => {
    const page = node || figma.currentPage;

    refMixin(page)(props);

    saveStyleMixin(page)(props);
    childrenMixin(page)(props);

    return page;
};
