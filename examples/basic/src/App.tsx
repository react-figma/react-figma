import * as React from 'react';
import { Page, Rectangle, Text, ErrorBoundary, Vector } from '../../../src';

export const App = () => {
    return (
        <ErrorBoundary>
            <Vector
                vectorPaths={[
                    {
                        windingRule: 'EVENODD',
                        data: 'M 0 100 L 100 100 L 50 0 Z'
                    }
                ]}></Vector>
        </ErrorBoundary>
    );
};
