import * as React from "react";
import {CurrentPage, Page, Rectangle, Text} from "../../../src";

export const App = () => {
    return <Page name="Page X">
        <Rectangle style={{ width: 200, height: 100, backgroundColor: '#0ddd25' }} />
        <Rectangle style={{ width: 200, height: 100, backgroundColor: '#a6dd00' }} />
    </Page>
}
