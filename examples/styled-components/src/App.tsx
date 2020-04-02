import * as React from 'react';
import { Page, Frame } from 'react-figma';

import styled from './styled';

// Cross-platform component imported:
import Swatch from './components/Swatch';

const Artboard = styled(Frame)`
    padding-top: 40px;
    padding-bottom: 40px;
    flex-direction: row;
    flex-wrap: wrap;
    width: ${(96 + 8) * 4}px;
    justify-content: center;
`;

export const App = () => {
    const colors = {
        Classic: '#12f24E',
        Neue: '#21304E',
        White: '#ffffff'
    };

    return (
        <Page isCurrent name="Page X">
            <Artboard>
                {Object.keys(colors).map(color => (
                    <Swatch key={color} name={color} hex={colors[color]} />
                ))}
            </Artboard>
        </Page>
    );
};
