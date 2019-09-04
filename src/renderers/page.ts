import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { BaseNodeProps, ChildrenProps, LayoutProps } from '../types';
import { childrenMixin } from '../mixins/childrenMixin';
import { yogaMixin } from '../mixins/yogaMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';

export interface PageProps extends BaseNodeProps, ChildrenProps {}

export const page = node => props => {
    const page = node || figma.createPage();

    saveStyleMixin(page)(props);
    baseNodeMixin(page)(props);

    return page;
};
