import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { geometryMixin } from '../mixins/geometryMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { propsAssign } from '../helpers/propsAssign';
import { exportMixin } from '../mixins/exportMixin';
import { TextProps } from '../components/text/Text';
import { blendMixin } from '../mixins/blendMixin';
import { isValidSize } from '../helpers/isValidSize';
import { isEqualFontStyle } from '../helpers/isEqualFontStyle';
import { sceneNodeMixin } from '../mixins/sceneNodeMixin';

const textNodePropsAssign = propsAssign<TextProps>([
    'characters',
    'textAlignHorizontal',
    'textAlignVertical',
    'textAlignVertical',
    'paragraphIndent',
    'paragraphSpacing',
    'autoRename',
    'fontSize',
    'textCase',
    'textDecoration',
    'letterSpacing',
    'lineHeight'
]);

const defaultFont = { family: 'Roboto', style: 'Regular' };

export const text = (node: TextNode) => (props: TextProps & { loadedFont?: FontName; hasDefinedWidth?: boolean }) => {
    const textNode = node || props.node || figma.createText();

    baseNodeMixin(textNode)(props);
    saveStyleMixin(textNode)(props);
    layoutMixin(textNode)(props);
    geometryMixin(textNode)(props);
    exportMixin(textNode)(props);
    blendMixin(textNode)(props);
    sceneNodeMixin(textNode)(props);

    const { loadedFont, fontName = defaultFont } = props;
    if (
        loadedFont &&
        fontName &&
        loadedFont.family === fontName.family &&
        isEqualFontStyle(loadedFont.style, fontName.style)
    ) {
        if (props.fontName) {
            textNode.fontName = loadedFont;
        }
        if (
            props.hasDefinedWidth &&
            isValidSize(props.width) &&
            isValidSize(textNode.height) &&
            !props.textAutoResize
        ) {
            textNode.resize(props.width, textNode.height);
            textNode.textAutoResize = 'HEIGHT';
        } else {
            textNode.textAutoResize = props.textAutoResize || 'WIDTH_AND_HEIGHT';
        }
        textNodePropsAssign(textNode)(props);
    }

    return textNode;
};
