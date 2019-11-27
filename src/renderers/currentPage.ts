import { saveStyleMixin } from '../mixins/saveStyleMixin';

export const currentPage = node => props => {
    const page = node || figma.currentPage;

    saveStyleMixin(page)(props);

    return page;
};
