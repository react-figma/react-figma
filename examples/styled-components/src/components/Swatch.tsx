// Inspired by: https://github.com/airbnb/react-sketchapp/tree/master/examples/styled-components
import * as React from 'react';

import styled from '../styled';
import textColor from '../utils/text-color';

const SwatchTile = styled.View`
    height: 250px;
    width: 250px;
    border-radius: 4px;
    margin: 4px;
    background-color: ${(props) => props.hex};
    justify-content: center;
    align-items: center;
    ${(props) => (props.hex === '#ffffff' ? `border-width: 2px;\nborder-color: black;\nborder-style: solid;` : '')}
`;

const SwatchName = styled.Text`
    color: ${(props) => textColor(props.hex)};
    font-size: 16px;
    /* line-height: 20px; */
    font-weight: bold;
`;

const Ampersand = styled.Text`
    color: ${(props) => textColor(props.hex)};
    font-size: 120px;
    font-family: Helvetica;
    /* line-height: 144px; FIXME: Get this working as pixel value instead of percentage */
`;

const Swatch = ({ name, hex }: { name: string; hex: string; key?: string }) => (
    <SwatchTile name={`Swatch ${name}`} hex={hex}>
        <SwatchName name="Swatch Name" hex={hex}>
            {name}
        </SwatchName>
        <Ampersand name="Ampersand" hex={hex}>
            &
        </Ampersand>
    </SwatchTile>
);

export default Swatch;
