import { filter, map } from 'rxjs/operators';
var nanoid = require('nanoid/non-secure');
import { Subject } from 'rxjs';

const $subject = new Subject();

export const subscribeOnMessages = message => {
    $subject.next(message);
};

type TMessagePromise = (value: any) => Promise<any>;
export const messagePromise: TMessagePromise = value => {
    const id = nanoid();
    const $responseMessage = $subject.pipe(
        filter((message: any) => message.id === id),
        map((message: any) => message.value)
    );
    figma.ui.postMessage({ value, id });

    return new Promise(resolve => {
        $responseMessage.subscribe(resolve);
    });
};
