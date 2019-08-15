import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { geometryMixin } from '../mixins/geometryMixin';
import { layoutMixin } from '../mixins/layoutMixin';

export const text = node => async props => {
    const textNode = node || figma.createText();

    baseNodeMixin(textNode)(props);
    layoutMixin(textNode)(props);
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
