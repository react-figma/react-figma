import * as React from 'react';

export class Rectangle extends React.PureComponent<{ style: any }> {
    static drawFigma(props) {
        figma.createRectangle();
        const rect = figma.createRectangle();
        rect.resize(props.style.width, props.style.height);
        rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
        figma.currentPage.appendChild(rect);
    }

    render() {
        return <></>;
    }
}
