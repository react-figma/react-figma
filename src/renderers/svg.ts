import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { refMixin } from '../mixins/refMixin';
import { exportMixin } from '../mixins/exportMixin';
import { blendMixin } from '../mixins/blendMixin';
import { frameMixin } from '../mixins/frameMixin';
import { SvgNodeProps } from '../components/svg/Svg';
import { hashCode } from '../helpers/hashCode';

const createNodeFromSvg = source => {
    const node = figma.createNodeFromSvg(source);
    node.setPluginData('svgHash', hashCode(source));
    return node;
};

const snakeExceptions = [
    'gradientUnits',
    'gradientTransform',
    'patternUnits',
    'patternTransform',
    'stdDeviation',
    'numOctaves',
    'specularExponent',
    'specularConstant',
    'surfaceScale',
    'viewBox'
];
function toSnakeCase(string: string) {
    if (string === 'href') {
        return 'xlink:href';
    }
    if (snakeExceptions.indexOf(string) !== -1) {
        return string;
    }
    return string.replace(/([A-Z])/g, $1 => `-${$1.toLowerCase()}`);
}

const caseMappings = {
    SVG_TEXTPATH: 'textPath',
    SVG_LINEARGRADIENT: 'linearGradient',
    SVG_RADIALGRADIENT: 'radialGradient',
    SVG_CLIPPATH: 'clipPath'
};

// Function adapted from https://github.com/airbnb/react-sketchapp/blob/5a66a14a53875324bc39bde87597fe35e3b254ff/src/renderers/SvgRenderer.ts
function makeSvgString(el: string | { type: string; props: any; elements: any }) {
    if (typeof el === 'string') {
        return el;
    }
    // @ts-ignore
    const { type, props: { elements: propsChildren, ...props } = {} } = el;

    let children = el.elements || propsChildren;
    if (children && !Array.isArray(children)) {
        children = [children];
    }

    if (!type || !type.toLowerCase().includes('svg_')) {
        throw new Error(`Could not render type '${type}'. Make sure to only have <Svg.*> components inside <Svg>.`);
    }

    const cleanedType = caseMappings[type] || type.slice(4).toLowerCase();
    const attributes = Object.keys(props || {}).reduce(
        // @ts-ignore
        (prev, k) => (props[k] ? `${prev} ${toSnakeCase(k)}="${props[k]}"` : prev),
        ''
    );

    let string = `<${cleanedType}${attributes}`;

    if (!children || !children.length) {
        string += '/>\n';
    } else {
        string += '>\n';
        string += (children || []).reduce((prev, c) => `${prev}  ${makeSvgString(c)}`, '');
        string += `</${cleanedType}>\n`;
    }

    return string;
}

export const svg = node => (props: SvgNodeProps & { isBuilding: boolean }) => {
    if (props.isBuilding) {
        return (
            node || {
                type: 'SVG_SVG',
                props,
                elements: [],
                build: elements => {
                    return svg(node)({ ...props, elements, isBuilding: false });
                }
            }
        );
    }

    let source = props.source; // Default to SvgXml string behaviour

    if (!source && props.elements) {
        // Use Svg.* children if found
        source = makeSvgString(props.elements);
    }

    let frameNode = node || props.node || createNodeFromSvg(source);

    const savedHash = frameNode.getPluginData('svgHash');
    if (savedHash != hashCode(source)) {
        const newSvg = figma.createNodeFromSvg(source);
        layoutMixin(newSvg)(props);
        frameNode.children.forEach(child => child.remove());
        newSvg.children.forEach(child => {
            frameNode.appendChild(child);
        });
        newSvg.remove();
        node.setPluginData('svgHash', hashCode(source));
    }

    refMixin(frameNode)(props);

    saveStyleMixin(frameNode)(props);
    baseNodeMixin(frameNode)(props);
    layoutMixin(frameNode)(props);
    exportMixin(frameNode)(props);
    blendMixin(frameNode)(props);

    frameMixin(frameNode)(props);

    return frameNode;
};
