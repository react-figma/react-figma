import * as React from 'react';
import { act, create } from 'react-test-renderer';
import { Component } from '../Component';
import { createFigma } from 'figma-api-stub';

describe('<Component />', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
    });

    it('Component without props', () => {
        let tree;
        act(() => {
            tree = create(<Component />);
        });
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Component with layout style properties', () => {
        let tree;
        act(() => {
            tree = create(
                <Component
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

    it('Component with color background', () => {
        let tree;
        act(() => {
            tree = create(
                <Component
                    style={{
                        backgroundColor: '#1bff00'
                    }}
                />
            );
        });
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Component with image background', () => {
        let tree;
        act(() => {
            tree = create(
                <Component
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

    it('Component with border', () => {
        let tree;
        act(() => {
            tree = create(
                <Component
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

    it('Component with auto layout', () => {
        let tree;
        act(() => {
            tree = create(
                <Component
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
