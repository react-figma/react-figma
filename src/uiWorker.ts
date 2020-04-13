import { base64ToBlobWorker } from './workers/base64ToBlobWorker';
import { fetchWorker } from './workers/fetchWorker';

interface TUIWorkerConfig {
    yoga?: Object;
    fetch?: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
}

export const uiWorker = () => event => {
    const message = event.data.pluginMessage;

    base64ToBlobWorker()(message);
    fetchWorker(fetch)(message);
};
