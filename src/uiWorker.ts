import { base64ToBlobWorker } from './workers/base64ToBlobWorker';

export const uiWorker = () => event => {
    const message = event.data.pluginMessage;

    base64ToBlobWorker()(message);
};
