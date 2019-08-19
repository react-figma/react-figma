import { yogaWorker } from './workers/yogaWorker';

export const uiWorker = yoga => event => {
    const message = event.data.pluginMessage;

    yogaWorker(yoga)(message);
};
