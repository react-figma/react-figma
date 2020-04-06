export { rectangle } from './rectangle';
export { text } from './text';
export { page } from './page';
export { frame } from './frame';
export { component } from './component';
export { instance } from './instance';
export { star } from './star';
export { vector } from './vector';
export { line } from './line';
export { group } from './group';
export { ellipse } from './ellipse';
export { svg } from './svg';

import svgElement from './svg-element';

const svg_circle = svgElement('circle');
const svg_ellipse = svgElement('ellipse');
const svg_g = svgElement('g');
const svg_text = svgElement('text');
const svg_tspan = svgElement('tspan');
const svg_textPath = svgElement('textPath');
const svg_path = svgElement('path');
const svg_polygon = svgElement('polygon');
const svg_polyline = svgElement('polyline');
const svg_line = svgElement('line');
const svg_rect = svgElement('rect');
const svg_use = svgElement('use');
const svg_image = svgElement('image');
const svg_symbol = svgElement('symbol');
const svg_defs = svgElement('defs');
const svg_linearGradient = svgElement('linearGradient');
const svg_radialGradient = svgElement('radialGradient');
const svg_stop = svgElement('stop');
const svg_clipPath = svgElement('clipPath');
const svg_pattern = svgElement('pattern');
const svg_mask = svgElement('mask');

export {
    svg_circle,
    svg_ellipse,
    svg_g,
    svg_text,
    svg_tspan,
    svg_textPath,
    svg_path,
    svg_polygon,
    svg_polyline,
    svg_line,
    svg_rect,
    svg_use,
    svg_image,
    svg_symbol,
    svg_defs,
    svg_linearGradient,
    svg_radialGradient,
    svg_stop,
    svg_clipPath,
    svg_pattern,
    svg_mask
};
