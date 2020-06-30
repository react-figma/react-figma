import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Ellipse } from '../Ellipse';
import { createFigma } from 'figma-api-stub';

describe('<Ellipse />', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
    });

    it('Ellipse without props', () => {
        const tree = renderer.create(<Ellipse />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Ellipse with layout style properties', () => {
        const tree = renderer
            .create(
                <Ellipse
                    style={{
                        width: 100,
                        height: 200
                    }}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Ellipse with arc data', () => {
        const tree = renderer
            .create(
                <Ellipse
                    arcData={{
                        startingAngle: 0,
                        endingAngle: Math.PI,
                        innerRadius: 0.5
                    }}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Ellipse with color background', () => {
        const tree = renderer
            .create(
                <Ellipse
                    style={{
                        backgroundColor: '#1bff00'
                    }}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Ellipse with image background', () => {
        const tree = renderer
            .create(
                <Ellipse
                    style={{
                        backgroundColor: '#ff8b29',
                        backgroundSize: 'cover',
                        backgroundImage: './image.png'
                    }}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
