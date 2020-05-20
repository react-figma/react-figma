import * as React from 'react';
import { CornerProps, DefaultContainerProps, InstanceItemProps, SelectionEventProps, StyleOf } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { transformBlendProperties, BlendStyleProperties } from '../../styleTransformers/transformBlendProperties';
import {
    GeometryStyleProperties,
    transformGeometryStyleProperties
} from '../../styleTransformers/transformGeometryStyleProperties';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';
import { StyleSheet } from '../../helpers/StyleSheet';
import { useSelectionChange } from '../../hooks/useSelectionChange';
import { transformAutoLayoutToYoga } from '../../styleTransformers/transformAutoLayoutToYoga';

import Circle from './Circle';
import Ellipse from './Ellipse';
import G from './G';
import Text from './Text';
import TSpan from './TSpan';
import TextPath from './TextPath';
import Path from './Path';
import Polygon from './Polygon';
import Polyline from './Polyline';
import Line from './Line';
import Rect from './Rect';
import Use from './Use';
import Image from './Image';
import Symbol from './Symbol';
import Defs from './Defs';
import LinearGradient from './LinearGradient';
import RadialGradient from './RadialGradient';
import Stop from './Stop';
import ClipPath from './ClipPath';
import Pattern from './Pattern';
import Mask from './Mask';

export interface SvgNodeProps extends DefaultContainerProps, InstanceItemProps, SelectionEventProps {
    style?: StyleOf<GeometryStyleProperties & YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
    source?: string;
    viewBox?: string;
    fill?: string;
    xmlns?: string;
    elements?: { type: string; props: any; elements: any };
}

type SvgPartTypes =
    | 'Circle'
    | 'Ellipse'
    | 'G'
    | 'Text'
    | 'TSpan'
    | 'TextPath'
    | 'Path'
    | 'Polygon'
    | 'Polyline'
    | 'Line'
    | 'Rect'
    | 'Use'
    | 'Image'
    | 'Symbol'
    | 'Defs'
    | 'LinearGradient'
    | 'RadialGradient'
    | 'Stop'
    | 'ClipPath'
    | 'Pattern'
    | 'Mask';

type SvgParts = { [P in SvgPartTypes]?: any };

const Svg: React.FC<SvgNodeProps> & SvgParts = props => {
    const nodeRef = React.useRef();

    useSelectionChange(nodeRef, props);

    const style = { ...StyleSheet.flatten(props.style), ...transformAutoLayoutToYoga(props) };

    const frameProps = {
        ...transformLayoutStyleProperties(style),
        ...transformBlendProperties(style),
        ...transformGeometryStyleProperties('backgrounds', style),
        ...props,
        style
    };
    const yogaChildProps = useYogaLayout({ nodeRef, ...frameProps });

    return (
        <svg
            {...frameProps}
            {...yogaChildProps}
            isBuilding={!!props.children}
            elements={frameProps.children}
            innerRef={nodeRef}
        />
    );
};

Svg.Circle = Circle;
Svg.Ellipse = Ellipse;
Svg.G = G;
Svg.Text = Text;
Svg.TSpan = TSpan;
Svg.TextPath = TextPath;
Svg.Path = Path;
Svg.Polygon = Polygon;
Svg.Polyline = Polyline;
Svg.Line = Line;
Svg.Rect = Rect;
Svg.Use = Use;
Svg.Image = Image;
Svg.Symbol = Symbol;
Svg.Defs = Defs;
Svg.LinearGradient = LinearGradient;
Svg.RadialGradient = RadialGradient;
Svg.Stop = Stop;
Svg.ClipPath = ClipPath;
Svg.Pattern = Pattern;
Svg.Mask = Mask;

export default Svg;
