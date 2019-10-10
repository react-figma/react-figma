import * as React from 'react';
import { render } from '../renderer';
import { Rectangle } from '..';

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
            );
        });
    });
}

class Children {
    children: Array<any>;
    appendChild(item) {
        if (!this.children) {
            this.children = [];
        }
        this.children.push(item);
    }
}

class Base {
    private pluginData: { [key: string]: string };

    setPluginData(key: string, value: string) {
        if (!this.pluginData) {
            this.pluginData = {};
        }
        this.pluginData[key] = value;
    }
    getPluginData(key: string) {
        if (!this.pluginData) {
            return;
        }
        return this.pluginData[key];
    }
}

class Rectangle1 {
    type = 'RECTANGLE';

    resize() {}
}

applyMixins(Rectangle1, [Base]);

const createFigma = () => ({
    root: new Children(),
    createRectangle: () => new Rectangle1()
});

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
