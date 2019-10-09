import * as React from 'react';
import { render } from '../renderer';
import { Rectangle } from '..';

class Children {
    children: Array<any>;
    constructor() {
        this.children = [];
    }
    appendChild(item) {
        this.children.push(item);
    }
}

// @ts-ignore
global.figma = {
    root: new Children(),
    createRectangle: () => ({ type: 'RECTANGLE', setPluginData: () => {}, resize: () => {} })
};

describe('renderer', () => {
    it('simple', () => {
        render(<Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />, figma.root);
        expect(figma.root).toMatchSnapshot();
    });
});
