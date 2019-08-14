import { colorToRGB } from '../helpers/color';
import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { BaseNodeProps, LayoutProps } from '../types';

export const text = async props => {
    const textNode = figma.createText();

    baseNodeMixin(textNode)(props);

    let fontName = textNode.fontName;
    if (typeof fontName !== 'object') {
        fontName = {
            family: 'Roboto',
            style: 'Regular'
        };
    }
    await figma.loadFontAsync(fontName);

    textNode.characters = props.characters;

    const { color } = props.style;
    if (color) {
        textNode.fills = [{ type: 'SOLID', color: colorToRGB(color) }];
    }

    return textNode;
};
