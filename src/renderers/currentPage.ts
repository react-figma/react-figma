import { childrenMixin } from '../mixins/childrenMixin';

export const currentPage = async props => {
    const page = figma.currentPage;

    childrenMixin(page)(props);

    return page;
};
