import * as React from 'react';
import { renderer } from './renderer';
import { Rectangle } from './components/rectangle/Rectangle';
import { Text } from './components/text/Text';

renderer(<Text style={{ color: '#ff0000' }}>text</Text>);

figma.closePlugin();
