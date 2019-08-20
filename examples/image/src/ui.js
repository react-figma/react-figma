import * as yoga from 'yoga-layout';
import { uiWorker } from '../../../src';
onmessage = event => {
    uiWorker({ yoga })(event);
};
