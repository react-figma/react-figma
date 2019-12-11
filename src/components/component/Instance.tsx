import * as React from 'react';
import { DefaultContainerProps, StyleOf } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { transformBlendProperties, BlendStyleProperties } from '../../styleTransformers/transformBlendProperties';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';
import { StyleSheet } from '../..';
import * as all from '../../index';

export interface InstanceProps extends DefaultContainerProps {
    style?: StyleOf<YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
    overrides?: { [key: string]: Object };
    component: ComponentNode;
}

const findNodeByName = (children, name) => {
    return children && children.find(child => child.name === name || findNodeByName(child.children, name));
};

const getComponentByType = type => {
    const componentName = type.charAt(0) + type.substring(1).toLowerCase();
    return all[componentName];
};

export const Instance: React.FC<InstanceProps> = props => {
    const nodeRef = React.useRef();
    const style = StyleSheet.flatten(props.style);
    const componentProps = {
        ...transformLayoutStyleProperties(style),
        ...transformBlendProperties(style),
        ...props
    };
    const yogaProps = useYogaLayout({ nodeRef, ...componentProps });

    return (
        <instance {...componentProps} {...yogaProps} innerRef={nodeRef}>
            {nodeRef.current && props.overrides
                ? Object.keys(props.overrides).map(overrideName => {
                      // @ts-ignore
                      const instanceItemNode = findNodeByName(nodeRef.current.children, overrideName);
                      if (instanceItemNode) {
                          const Component = getComponentByType(instanceItemNode.type);
                          return (
                              <Component
                                  key={overrideName}
                                  preventResizing
                                  node={instanceItemNode}
                                  {...props.overrides[overrideName]}
                              />
                          );
                      }
                  })
                : null}
        </instance>
    );
};
