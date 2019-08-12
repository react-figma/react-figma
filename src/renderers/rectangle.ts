import {colorToRGB} from "../helpers/color";

export const rectangle = async (props) => {
    const rect = figma.createRectangle();
    rect.resize(props.style.width, props.style.height);

    const { backgroundColor } = props.style;

    if (backgroundColor) {
        rect.fills = [{ type: 'SOLID', color: colorToRGB(backgroundColor) }];
    }

    figma.currentPage.appendChild(rect);
}
