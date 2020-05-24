import { propsAssign } from '../helpers/propsAssign';
import { FrameSpecificProps } from '../types';

export const frameSpecificProps = propsAssign<FrameSpecificProps, FrameSpecificProps>(
    ['clipsContent', 'guides', 'layoutGrids', 'gridStyleId'],
    {
        clipsContent: false,
        guides: [],
        layoutGrids: []
    }
);
