import * as React from 'react';
const renderer = require('react-test-renderer');
import { Text } from '../Text';
import { createFigma } from 'figma-api-stub';

describe('<Text />', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
    });

    it('Text without props', () => {
        const tree = renderer.create(<Text />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Text with fontFamily', () => {
        const tree = renderer.create(<Text style={{ fontFamily: 'Helvetica' }} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Text with fontFamily, fontWeight', () => {
        const tree = renderer.create(<Text style={{ fontFamily: 'Helvetica', fontWeight: 'bold' }} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Text with fontFamily, fontWeight, fontStyle', () => {
        const tree = renderer
            .create(<Text style={{ fontFamily: 'Helvetica', fontWeight: 'bold', fontStyle: 'italic' }} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Text with maxWidth', () => {
        const tree = renderer.create(<Text style={{ maxWidth: '100%' }} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Text with width', () => {
        const tree = renderer.create(<Text style={{ width: 200 }} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Text got full width when display: block', () => {
        process.env.REACT_FIGMA_WEB_DEFAULTS_ENABLED = '1';
        const tree = renderer.create(<Text style={{ display: 'block' } as any} />).toJSON();
        expect(tree).toMatchSnapshot();
        delete process.env.REACT_FIGMA_WEB_DEFAULTS_ENABLED;
    });

    it('Text got full width when display: block (wrapped to array)', () => {
        process.env.REACT_FIGMA_WEB_DEFAULTS_ENABLED = '1';
        const tree = renderer.create(<Text style={[{ display: 'block' } as any]} />).toJSON();
        expect(tree).toMatchSnapshot();
        delete process.env.REACT_FIGMA_WEB_DEFAULTS_ENABLED;
    });
});
