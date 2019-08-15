import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { geometryMixin } from '../mixins/geometryMixin';

export const text = async props => {
    const textNode = figma.createText();

    baseNodeMixin(textNode)(props);
    geometryMixin(textNode)(props);

    let fontName = textNode.fontName;
    if (typeof fontName !== 'object') {
        fontName = {
            family: 'Roboto',
            style: 'Regular'
        };
    }
    await figma.loadFontAsync(fontName);

    textNode.characters = props.characters;

    return textNode;
};
