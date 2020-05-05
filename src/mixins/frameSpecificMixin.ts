import { propsAssign } from '../helpers/propsAssign';
import { FrameSpecificProps } from '../types';

export const frameSpecificProps = propsAssign<FrameSpecificProps>([
    'clipsContent',
    'guides',
    'layoutGrids',
    'gridStyleId'
]);
