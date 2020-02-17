import * as yoga from 'yoga-layout-prebuilt';
import { uiWorker } from '../../../src';

onmessage = event => {
    uiWorker({ yoga, fetch })(event);
};
