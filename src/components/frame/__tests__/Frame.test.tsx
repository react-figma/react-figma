import * as React from 'react';
import { act, create } from 'react-test-renderer';
import { Frame } from '../Frame';
import { createFigma } from 'figma-api-stub';
import { View } from '../../..';

describe('<Frame />', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
    });

    it('Frame without props', () => {
        let tree;
        act(() => {
            tree = create(<Frame />);
        });
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Frame with layout style properties', () => {
        let tree;
        act(() => {
            tree = create(
                <Frame
                    style={{
                        width: 100,
                        height: 200,
                        top: 50,
                        left: 20
                    }}
                />
            );
        });
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Frame with color background', () => {
        let tree;
        act(() => {
            tree = create(
                <Frame
                    style={{
                        backgroundColor: '#1bff00'
                    }}
                />
            );
        });
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Frame with image background', () => {
        let tree;
        act(() => {
            tree = create(
                <Frame
                    style={{
                        backgroundColor: '#ff8b29',
                        backgroundSize: 'cover',
                        backgroundImage: './image.png'
                    }}
                />
            );
        });
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Frame with border', () => {
        let tree;
        act(() => {
            tree = create(
                <Frame
                    style={{
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: '#222020'
                    }}
                />
            );
        });
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Frame with auto layout', () => {
        let tree;
        act(() => {
            tree = create(
                <Frame
                    layoutMode="HORIZONTAL"
                    horizontalPadding={4}
                    verticalPadding={1}
                    style={{
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: '#222020'
                    }}
                />
            );
        });
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
