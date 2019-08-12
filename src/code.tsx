import * as React from 'react';
import { renderer } from './renderer';
import { Rectangle } from './components/rectangle/Rectangle';
import { Text } from './components/text/Text';

renderer(
    <Rectangle style={{ width: 200, height: 100, backgroundColor: '#dd55aa' }}>
        <Text style={{ color: '#ffffff' }}>text</Text>
    </Rectangle>
);

figma.closePlugin();
