import * as React from 'react';
import { BaseNodeProps, ChildrenProps, LayoutProps } from '../../types';
import { yogaHandler } from '../../yogaHandler';

interface Page extends BaseNodeProps, ChildrenProps {}

export const Page: React.ElementType<Page> = props => {
    const [yogaProps, setYogaProps] = React.useState({ children: [] });
    const ref = React.useRef();
    React.useEffect(() => {
        const instance = ref.current;
        if (!instance) {
            return;
        }
        yogaHandler(instance, props).then(newProps => {
            console.log('yoga mixin result', newProps);
            setYogaProps(newProps);
        });
    }, []);

    const { children: yogaChildren, ...yogaPropsWithoutChildren } = yogaProps;

    const mergedChildren =
        yogaChildren.length > 0 &&
        React.Children.map(props.children, (child: any, index) => React.cloneElement(child, yogaChildren[index]));
    console.log('mergedChildren', mergedChildren);
    const children = mergedChildren || props.children;
    const mergedProps = { ...props, ...yogaPropsWithoutChildren, children };
    console.log('mergedProps', mergedProps);

    return <page {...mergedProps} ref={ref} />;
};
