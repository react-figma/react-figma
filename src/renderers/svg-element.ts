export default part => node => props => {
  return node || { type: `SVG_${part.toUpperCase()}`, children: [], props };
};
