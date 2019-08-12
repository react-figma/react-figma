import * as React from "react";
import { convertToJSON } from 'react-json-renderer'

export const renderer = (jsx: React.ReactElement<any>) => {
    // @ts-ignore
    const drawFigma = jsx.type.drawFigma;
    if (drawFigma) {
        drawFigma(jsx.props);
    }
};
