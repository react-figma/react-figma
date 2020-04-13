import * as yoga from 'yoga-layout-prebuilt';
import { uiWorker } from 'react-figma';

const handler = uiWorker({ yoga, fetch });

onmessage = event => {
    handler(event);
};
