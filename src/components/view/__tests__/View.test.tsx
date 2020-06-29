import * as React from 'react';
import { View } from '../View';
import { Text } from '../../text/Text';
import { createFigma } from 'figma-api-stub';
const renderer = require('react-test-renderer');

describe('<View />', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true,
        });
    });

    it('View without children', () => {
        const tree = renderer.create(<View style={{ backgroundColor: '#ff0000' }} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('View with children', () => {
        const tree = renderer
            .create(
                <View style={{ flex: 1 }}>
                    <Text>text</Text>
                </View>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('View with children and rectangle styles', () => {
        const tree = renderer
            .create(
                <View style={{ flex: 1, backgroundColor: '#ff0000' }}>
                    <Text>text</Text>
                </View>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('View with layoutAlign', () => {
        const tree = renderer
            .create(
                <View
                    style={{ width: 80, height: 40, backgroundColor: '#ffaa97' }}
                    layoutMode="HORIZONTAL"
                    layoutAlign="MAX"
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
