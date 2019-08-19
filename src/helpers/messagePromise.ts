var nanoid = require('nanoid/non-secure');
import { Observable } from 'rxjs';

const observable = new Observable(function subscribe(subscriber) {
    // todo create "subscribeOnMessages" fukction
    figma.ui.onmessage = message => {
        subscriber.next(message);
    };
});

type TMessagePromise = (value: any) => Promise<any>;
export const messagePromise: TMessagePromise = value => {
    return new Promise(resolve => {
        const id = nanoid();
        figma.ui.postMessage({ value, id });
        observable.subscribe((message: any) => {
            if (message.id === id) {
                resolve(message.value);
            }
        });
    });
};
