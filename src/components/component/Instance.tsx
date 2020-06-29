import * as React from 'react';
import { AutoLayoutProps, DefaultContainerProps, SelectionEventProps, StyleOf } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { transformBlendProperties, BlendStyleProperties } from '../../styleTransformers/transformBlendProperties';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';
import { StyleSheet } from '../..';
import * as all from '../../index';
import { useSelectionChange } from '../../hooks/useSelectionChange';
import { transformAutoLayoutToYoga } from '../../styleTransformers/transformAutoLayoutToYoga';
import { api } from '../../rpc';
import { OnLayoutHandlerProps, useOnLayoutHandler } from '../../hooks/useOnLayoutHandler';

export interface InstanceProps extends DefaultContainerProps, SelectionEventProps, AutoLayoutProps, OnLayoutHandlerProps {
    style?: StyleOf<YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
    overrides?: { [key: string]: Object };
    component: ComponentNode;
}

const getComponentByType = type => {
    const componentName = type.charAt(0) + type.substring(1).toLowerCase();
    return all[componentName];
};

const Override = props => {
    const { overrideName, parentRef, overrides = {} } = props;
    const [hasInstanceItemNode, setHasInstanceItemNode] = React.useState(false);
    const instanceItemNodeRef = React.useRef<any>();
    React.useEffect(() => {
        const getNode = async () => {
            const instanceItemNode = await api.findNodeByName(parentRef.current, overrideName);
            instanceItemNodeRef.current = instanceItemNode;
            setHasInstanceItemNode(true);
        };
        getNode();
    }, []);

    if (hasInstanceItemNode && instanceItemNodeRef.current) {
        const instanceItemNode = instanceItemNodeRef.current;
        const Component = getComponentByType(instanceItemNode.type);
        return <Component key={overrideName} preventResizing node={instanceItemNode} {...overrides} />;
    } else {
        return null;
    }
};

export const Instance: React.FC<InstanceProps> = props => {
    const [isHaveNode, setHaveNode] = React.useState(false);
    const nodeRef = React.useRef<InstanceNode>();
    useSelectionChange(nodeRef, props);
    const style = { ...StyleSheet.flatten(props.style), ...transformAutoLayoutToYoga(props) };
    const componentProps = {
        ...transformLayoutStyleProperties(style),
        ...transformBlendProperties(style),
        ...props,
        style
    };
    const yogaProps = useYogaLayout({ nodeRef, ...componentProps });

    useOnLayoutHandler(yogaProps, props);

    return (
        <instance {...componentProps} {...yogaProps} innerRef={nodeRef} innerRefCallback={() => setHaveNode(true)}>
            {isHaveNode && props.overrides
                ? Object.keys(props.overrides).map(overrideName => {
                      return (
                          <Override
                              overrideName={overrideName}
                              parentRef={nodeRef}
                              overrides={props.overrides[overrideName]}
                          />
                      );
                  })
                : null}
        </instance>
    );
};
