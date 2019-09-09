import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { refMixin } from '../mixins/refMixin';

export const currentPage = node => props => {
    const page = node || figma.currentPage;

    refMixin(page)(props);

    saveStyleMixin(page)(props);

    return page;
};
