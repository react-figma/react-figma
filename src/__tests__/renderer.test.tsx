import * as React from 'react';
import { render } from '../renderer';
import { Rectangle } from '..';
import { createFigma } from 'figma-api-stub';

describe('renderer', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma();
    });

    it('simple', () => {
        figma.createRectangle = jest.fn().mockImplementation(figma.createRectangle);
        render(<Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />, figma.root);
        expect(figma.createRectangle).toHaveBeenCalledTimes(1);
        expect(figma.root).toMatchSnapshot();
    });

    it('simple 2', () => {
        figma.createRectangle = jest.fn().mockImplementation(figma.createRectangle);
        render(<Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />, figma.root);
        render(<Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />, figma.root);
        expect(figma.createRectangle).toHaveBeenCalledTimes(1);
        expect(figma.root).toMatchSnapshot();
    });
});
