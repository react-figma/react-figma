import * as React from "react";
import * as TestRenderer from 'react-test-renderer';

export const renderer = (jsx: React.ReactNode) => {
    const testRenderer = TestRenderer.create(
        jsx
    );

    console.log(testRenderer.toJSON());
};
