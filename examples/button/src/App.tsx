import * as React from "react";
import {CurrentPage, Page, Rectangle, Text} from "../../../src";

export const App = () => {
    return <CurrentPage>
        <Rectangle style={{ width: 200, height: 100, backgroundColor: '#dd55aa' }} />
        <Text y={30} characters="text2" style={{ color: '#ffffff' }} />
    </CurrentPage>
}
