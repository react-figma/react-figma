import * as React from 'react';
const renderer = require('react-test-renderer');
import { Text } from '../Text';

describe('<Text />', () => {
    it('Text without props', () => {
        const tree = renderer.create(<Text />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Text with fontFamily', () => {
        const tree = renderer.create(<Text style={{ fontFamily: 'Helvetica', fontWeight: 'bold' }} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
