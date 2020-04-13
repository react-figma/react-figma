import * as yoga from 'yoga-layout-prebuilt';
import { uiWorker } from 'react-figma';

onmessage = event => {
    uiWorker({ yoga, fetch })(event);
};
