import { yogaWorker } from './workers/yogaWorker';
import { base64ToBlobWorker } from './workers/base64ToBlobWorker';
export const uiWorker = ({ yoga }) => event => {
    const message = event.data.pluginMessage;
    yogaWorker(yoga)(message);
    base64ToBlobWorker()(message);
};
