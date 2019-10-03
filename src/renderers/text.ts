import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { geometryMixin } from '../mixins/geometryMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { propsAssign } from '../helpers/propsAssign';
import { refMixin } from '../mixins/refMixin';

const textNodePropsAssign = propsAssign<TextNode>([
    'textAlignHorizontal',
    'textAlignVertical',
    'textAlignVertical',
    'textAutoResize',
    'paragraphIndent',
    'paragraphSpacing',
    'autoRename',
    'fontSize',
    'fontName',
    'textCase',
    'textDecoration',
    'letterSpacing',
    'lineHeight'
]);

export const text = node => props => {
    const textNode = node || figma.createText();

    refMixin(textNode)(props);
    baseNodeMixin(textNode)(props);
    saveStyleMixin(textNode)(props);
    layoutMixin(textNode)(props);
    geometryMixin(textNode)(props);

    let fontName = textNode.fontName;
    if (typeof fontName !== 'object') {
        fontName = {
            family: 'Roboto',
            style: 'Regular'
        };
    }
    //figma.loadFontAsync(fontName);

    textNode.characters = props.characters;

    textNodePropsAssign(textNode)(props);

    return textNode;
};
