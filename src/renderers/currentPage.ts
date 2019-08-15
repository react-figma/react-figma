import { childrenMixin } from '../mixins/childrenMixin';

export const currentPage = node => async props => {
    const page = figma.currentPage;

    childrenMixin(page)(props);

    return page;
};
