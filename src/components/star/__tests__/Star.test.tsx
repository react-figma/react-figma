import * as React from 'react';
const renderer = require('react-test-renderer');
import { Star } from '../Star';

describe('<Star />', () => {
    it('Star without props', () => {
        const tree = renderer.create(<Star />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
