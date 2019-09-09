import * as React from 'react';
import { fillsPreprocessor } from '../helpers/fillsPreprocessor';

export const useFillsPreprocessor = props => {
    const [fills, setFills] = React.useState();
    React.useEffect(() => {
        const transform = async () => {
            const newFills = await fillsPreprocessor(props);
            setFills(newFills);
        };
        transform();
    }, []);

    return fills;
};
