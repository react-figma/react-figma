import * as React from "react";
import {renderer} from "./renderer";
import {Rectangle} from "./components/rectangle/Rectangle";
import {Text} from "./components/text/Text";

renderer(
    <Rectangle style={{width: 100, height: 100}}>
        <Text style={{color: "#ff0000"}}>text</Text>
    </Rectangle>);

figma.closePlugin();
