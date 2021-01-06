import * as React from 'react';
import { StyleOf } from '../types';
import { GeometryStyleProperties } from '../styleTransformers/transformGeometryStyleProperties';
import { YogaStyleProperties } from '../yoga/YogaStyleProperties';
import { LayoutStyleProperties } from '../styleTransformers/transformLayoutStyleProperties';
import { BlendStyleProperties } from '../styleTransformers/transformBlendProperties';
import { BorderStyleProperties } from '../styleTransformers/transformBorderProperties';
import { useCallback } from 'react';
import { TextStyleProperties } from '../styleTransformers/transformTextStyleProperties';

type TStyle = StyleOf<
    GeometryStyleProperties &
        YogaStyleProperties &
        LayoutStyleProperties &
        BlendStyleProperties &
        BorderStyleProperties &
        TextStyleProperties
>;

const InheritStyleContext = React.createContext<TStyle>({});

export const useInheritStyle = (): TStyle => {
    if (!process.env.REACT_FIGMA_STYLE_INHERITANCE_ENABLED) {
        return {};
    }
    return React.useContext(InheritStyleContext);
};

const inheritedProps = [
    'color',
    'fontFamily',
    'fontSize',
    'fontStyle',
    'fontVariant',
    'fontWeight',
    'textAlign',
    'lineHeight',
    'letterSpacing'
];

export const InheritStyleProvider = (props: { style?: TStyle; children: any }) => {
    const { children, style = {} } = props;
    if (!process.env.REACT_FIGMA_STYLE_INHERITANCE_ENABLED) {
        return children;
    }
    const inheritedStyle = useInheritStyle();
    const mergedStyle = { ...inheritedStyle, ...style };

    const providedStyle = inheritedProps.reduce(
        (acc, prop) => ({ ...acc, ...(mergedStyle[prop] ? { [prop]: mergedStyle[prop] } : {}) }),
        {}
    );

    return <InheritStyleContext.Provider value={providedStyle}>{children}</InheritStyleContext.Provider>;
};
