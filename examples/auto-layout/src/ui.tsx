import { uiWorker } from 'react-figma';

const handler = uiWorker({ fetch });

onmessage = event => {
    handler(event);
};
