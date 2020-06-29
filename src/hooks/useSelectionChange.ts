import * as React from 'react';
import { SelectionEventProps } from '../types';
import { $selectionReactIds } from '../rpc';

export const useSelectionChange = (nodeRef: { current?: any }, props: SelectionEventProps) => {
    const didMountRef = React.useRef(false);
    const [isSelected, setSelected] = React.useState(false);

    React.useEffect(() => {
        if (!props.onSelectionEnter && !props.onSelectionLeave) {
            return;
        }
        if (!didMountRef.current) {
            didMountRef.current = true;
            return;
        }
        if (isSelected) {
            props.onSelectionEnter && props.onSelectionEnter();
        } else {
            props.onSelectionLeave && props.onSelectionLeave();
        }
    }, [isSelected]);

    React.useEffect(() => {
        const instance = nodeRef.current;
        if (!props.onSelectionEnter && !props.onSelectionLeave) {
            return;
        }
        const handler = (selection) => {
            if (selection.indexOf(instance.reactId) >= 0) {
                setSelected(true);
            } else {
                setSelected(false);
            }
        };

        const subscription = $selectionReactIds.subscribe((value) => handler && handler(value));

        return () => subscription.unsubscribe();
    }, [props.onSelectionEnter, props.onSelectionLeave]);
};
