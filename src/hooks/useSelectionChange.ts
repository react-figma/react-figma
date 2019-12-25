import * as React from 'react';
import { SelectionEventProps } from '../types';

export const useSelectionChange = (nodeRef: { current?: SceneNode }, props: SelectionEventProps) => {
    const didMountRef = React.useRef(false);
    const [isSelected, setSelected] = React.useState(false);

    React.useEffect(() => {
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
        const handler = () => {
            if (figma.currentPage.selection.indexOf(nodeRef.current) >= 0) {
                setSelected(true);
            } else {
                setSelected(false);
            }
        };
        figma.on('selectionchange', handler);
        return () => figma.off('selectionchange', handler);
    }, [props.onSelectionEnter, props.onSelectionLeave]);
};
