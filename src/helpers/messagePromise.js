import { filter, map } from 'rxjs/operators';
import nanoid from 'nanoid/non-secure';
import { Subject } from 'rxjs';
const $subject = new Subject();
export const subscribeOnMessages = message => {
    $subject.next(message);
};
export const messagePromise = value => {
    const id = nanoid();
    const $responseMessage = $subject.pipe(
        filter(message => message.id === id),
        map(message => message.value)
    );
    figma.ui.postMessage({ value, id });
    return new Promise(resolve => {
        $responseMessage.subscribe(resolve);
    });
};
