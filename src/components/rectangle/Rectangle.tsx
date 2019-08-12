import * as React from 'react';
import { colorToRGB } from '../../helpers/color';

export class Rectangle extends React.PureComponent<{ style: any }> {
    static drawFigma(props) {
        const rect = figma.createRectangle();
        rect.resize(props.style.width, props.style.height);

        const { backgroundColor } = props.style;

        if (backgroundColor) {
            rect.fills = [{ type: 'SOLID', color: colorToRGB(backgroundColor) }];
        }

        figma.currentPage.appendChild(rect);
    }

    render() {
        return <></>;
    }
}
