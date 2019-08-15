import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { BaseNodeProps, ChildrenProps, LayoutProps } from '../types';
import { childrenMixin } from '../mixins/childrenMixin';

export interface PageProps extends BaseNodeProps, ChildrenProps {}

export const page = async props => {
    const page = figma.createPage();

    baseNodeMixin(page)(props);
    childrenMixin(page)(props);

    return page;
};
