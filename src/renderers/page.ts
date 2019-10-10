import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { refMixin } from '../mixins/refMixin';
import { exportMixin } from '../mixins/exportMixin';
import { PageProps } from '../components/page/Page';

export const page = (node: PageNode) => (props: PageProps) => {
    const page = node || figma.createPage();

    refMixin(page)(props);

    saveStyleMixin(page)(props);
    baseNodeMixin(page)(props);
    exportMixin(page)(props);

    return page;
};
