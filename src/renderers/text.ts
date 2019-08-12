import { colorToRGB } from '../helpers/color';

export const text = async props => {
    const textNode = figma.createText();

    let fontName = textNode.fontName;
    if (typeof fontName !== 'object') {
        fontName = {
            family: 'Roboto',
            style: 'Regular'
        };
    }
    await figma.loadFontAsync(fontName);

    textNode.characters = props.children;

    const { color } = props.style;
    if (color) {
        textNode.fills = [{ type: 'SOLID', color: colorToRGB(color) }];
    }

    figma.currentPage.appendChild(textNode);
};
