export const svgPart = node => props => {
    return node || { type: 'SVG_PART', children: [], ...props };
};
