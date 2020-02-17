import { yogaWorker } from './workers/yogaWorker';
import { base64ToBlobWorker } from './workers/base64ToBlobWorker';
import { fetchWorker } from './workers/fetchWorker';

interface TUIWorkerConfig {
    yoga?: Object;
    fetch?: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
}

export const uiWorker = (config: TUIWorkerConfig) => {
    const { yoga, fetch } = config;
    if (process.env.NODE_ENV !== 'production') {
        if (typeof fetch !== 'function') {
            console.warn("Fetch function don't passed to uiWorker: useFetch cannot work correctly");
        }
        if (typeof yoga !== 'object') {
            console.warn("Yoga don't passed to uiWorker, auto-layout cannot work correctly");
        }
    }

    return event => {
        const message = event.data.pluginMessage;

        yogaWorker(yoga)(message);
        base64ToBlobWorker()(message);
        fetchWorker(fetch)(message);
    };
};
