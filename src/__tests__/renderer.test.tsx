import * as React from 'react';
import { render } from '../renderer';
import { Rectangle, Page, Text } from '..';
import { createFigma } from 'figma-api-stub';

describe('renderer', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
    });

    it('render single component', () => {
        figma.createRectangle = jest.fn().mockImplementation(figma.createRectangle);
        render(<Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />, figma.currentPage);
        expect(figma.createRectangle).toHaveBeenCalledTimes(1);
        expect(figma.root).toMatchSnapshot();
    });

    it('rerender single component', () => {
        figma.createRectangle = jest.fn().mockImplementation(figma.createRectangle);
        render(<Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />, figma.currentPage);
        render(<Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />, figma.currentPage);
        expect(figma.createRectangle).toHaveBeenCalledTimes(1);
        expect(figma.root).toMatchSnapshot();
    });

    it('insert new component between', () => {
        figma.createRectangle = jest.fn().mockImplementation(figma.createRectangle);
        figma.createText = jest.fn().mockImplementation(figma.createText);
        figma.createPage = jest.fn().mockImplementation(figma.createPage);
        render(
            <Page>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />
            </Page>,
            figma.root
        );
        render(
            <Page>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
                <Text characters="test" />
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />
            </Page>,
            figma.root
        );
        expect(figma.createRectangle).toHaveBeenCalledTimes(2);
        expect(figma.createText).toHaveBeenCalledTimes(1);
        expect(figma.createPage).toHaveBeenCalledTimes(3);
        expect(figma.root).toMatchSnapshot();
    });

    it('remove component between', () => {
        figma.createRectangle = jest.fn().mockImplementation(figma.createRectangle);
        figma.createText = jest.fn().mockImplementation(figma.createText);
        figma.createPage = jest.fn().mockImplementation(figma.createPage);
        render(
            <Page>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
                <Text characters="test" />
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />
            </Page>,
            figma.root
        );
        render(
            <Page>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />
            </Page>,
            figma.root
        );
        expect(figma.createRectangle).toHaveBeenCalledTimes(2);
        expect(figma.createText).toHaveBeenCalledTimes(1);
        expect(figma.createPage).toHaveBeenCalledTimes(3);
        expect(figma.root).toMatchSnapshot();
    });

    it('text instance without Text component', () => {
        figma.createRectangle = jest.fn().mockImplementation(figma.createRectangle);
        figma.createText = jest.fn().mockImplementation(figma.createText);
        render(
            <Page>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} /> fff
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />
            </Page>,
            figma.root
        );
        expect(figma.createRectangle).toHaveBeenCalledTimes(2);
        expect(figma.createText).toHaveBeenCalledTimes(0);
        expect(figma.root).toMatchSnapshot();
    });
});
