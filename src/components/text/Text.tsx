import * as React from 'react';
import { colorToRGB } from '../../helpers/color';

export class Text extends React.PureComponent<{ style: any }> {
    static async drawFigma(props) {
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
    }

    render() {
        return <></>;
    }
}
