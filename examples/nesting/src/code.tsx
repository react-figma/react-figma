import * as React from 'react';
import { Page, renderer } from '../../../src/';
import { Rectangle } from '../../../src/';
import { Text } from '../../../src/';

(async () => {
    await renderer(
        <Page name="Page X">
            <Rectangle style={{ width: 200, height: 100, backgroundColor: '#dd55aa' }} />
            <Rectangle name="Blue rect" style={{ width: 100, height: 50, backgroundColor: '#00ffff' }} />
            <Rectangle width={50} height={25} style={{ backgroundColor: '#0f00ff' }} />
            <Text characters="text" style={{ color: '#ffffff' }} />
            <Text y={30} characters="text2" style={{ color: '#ffffff' }} />
        </Page>
    );
    figma.closePlugin();
})();
