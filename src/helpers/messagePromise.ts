import { filter, map } from 'rxjs/operators';
import * as nanoid from 'nanoid/non-secure';
import { Subject } from 'rxjs';

const promiseIdAttribute = 'reactFigmaMessagePromiseId';

// Collects messages passed to UI realm
const $uiSubject = new Subject();
// Collects messages passed to plugin realm
const $pluginSubject = new Subject();

const subscribeOnMessage = ($subject, getMessageData) => message => {
    $subject.next(getMessageData(message));
};

export const subscribeOnUIMessages = subscribeOnMessage($uiSubject, message => message);
export const subscribeOnPluginMessages = subscribeOnMessage($pluginSubject, message => message.data.pluginMessage);

type TMessagePromise = (value: Object) => Promise<any>;
const messagePromise = ($subject, postMessage): TMessagePromise => value => {
    const id = nanoid();
    const $responseMessage = $subject.pipe(
        filter((message: any) => message[promiseIdAttribute] === id),
        map(({ [promiseIdAttribute]: id, ...message }) => message)
    );
    postMessage({ ...value, [promiseIdAttribute]: id });

    return new Promise(resolve => {
        $responseMessage.subscribe(resolve);
    });
};

export const pluginToUIMessagePromise = messagePromise($uiSubject, message => figma.ui.postMessage(message));
export const UIToPluginMessagePromise = messagePromise($pluginSubject, message => {
    parent.postMessage({ pluginMessage: message }, '*');
});

const respondToMessage = postMessage => (message, response: Object) => {
    postMessage({ ...response, [promiseIdAttribute]: message[promiseIdAttribute] });
};

export const respondToUIMessage = respondToMessage(message => figma.ui.postMessage(message));
export const respondToPluginMessage = respondToMessage(message => {
    parent.postMessage({ pluginMessage: message }, '*');
});
