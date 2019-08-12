import * as React from 'react';
import { renderer } from './renderer';
import { Rectangle } from './components/rectangle/Rectangle';
import { Text } from './components/text/Text';


(async () => {
    await renderer(<Rectangle style={{ width: 200, height: 100, backgroundColor: '#dd55aa' }}>
        <Rectangle style={{ width: 100, height: 50, backgroundColor: '#00ffff' }}>
            <Rectangle style={{ width: 50, height: 25, backgroundColor: '#0f00ff' }}>
                <Text style={{ color: '#ffffff' }}>text</Text>
            </Rectangle>
        </Rectangle>
    </Rectangle>)
    figma.closePlugin();
})();


