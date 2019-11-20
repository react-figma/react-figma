import * as React from 'react';
import { $updatedYogaCoords, updateYogaNode } from '../yoga/yogaStream';
import { filter, map } from 'rxjs/operators';

export const useYogaLayout = props => {
    const { yogaRef } = props;
    const [yogaProps, setYogaProps] = React.useState<any>({});

    React.useEffect(() => {
        const instance = yogaRef.current;
        const subject = $updatedYogaCoords.pipe(
            filter((message: any) => message.instance === instance),
            map((message: any) => message.props)
        );

        const subscription = subject.subscribe(setYogaProps);

        return () => subscription.unsubscribe();
    }, []);

    const didMountRef = React.useRef(false);
    React.useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true;
            return;
        }
        const instance = yogaRef.current;
        updateYogaNode(instance);
    }, [props.children, props.width, props.height, props.style, props.characters, props.fontSize]);

    return yogaProps;
};
