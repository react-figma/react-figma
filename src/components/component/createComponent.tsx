import * as React from 'react';
import { ComponentProps, Component } from './Component';
import { Subject } from 'rxjs';
import { Instance, InstanceProps } from './Instance';

export const createComponent = () => {
    const subject = new Subject();
    let currentNode;
    const nodeRef = {
        set current(node) {
            if (!node || node === currentNode) {
                return;
            }
            currentNode = node;
            subject.next();
        },
        get current() {
            return currentNode;
        },
    };

    const ComponentWrapper: React.FC<Omit<ComponentProps, 'nodeRef'>> = (props) => {
        return <Component {...props} nodeRef={nodeRef} />;
    };

    const InstanceWrapper: React.FC<Omit<InstanceProps, 'component'>> = (props) => {
        const [isHasComponent, setHasComponent] = React.useState(nodeRef.current);
        React.useEffect(() => {
            const subscription = subject.subscribe(() => {
                setHasComponent(true);
            });
            return subscription.unsubscribe();
        }, []);
        if (!isHasComponent) {
            return null;
        }
        return <Instance {...props} component={nodeRef.current} />;
    };

    return {
        Component: ComponentWrapper,
        Instance: InstanceWrapper,
    };
};
