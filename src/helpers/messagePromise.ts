import { filter, map } from 'rxjs/operators';
import * as nanoid from 'nanoid/non-secure';
import { Subject } from 'rxjs';

// Collects messages passed to UI realm
const $uiSubject = new Subject();
// Collects messages passed to plugin realm
const $pluginSubject = new Subject();

const subscribeOnMessage = ($subject, getMessageData) => message => {
    $subject.next(getMessageData(message));
};

export const subscribeOnUIMessages = subscribeOnMessage($uiSubject, message => message);
export const subscribeOnPluginMessages = subscribeOnMessage($pluginSubject, message => message.data.pluginMessage);

type TMessagePromise = (value: any) => Promise<any>;
const messagePromise = ($subject, postMessage): TMessagePromise => value => {
    const id = nanoid();
    const $responseMessage = $subject.pipe(
        filter((message: any) => message.id === id),
        map((message: any) => message.value)
    );
    postMessage({ value, id });

    return new Promise(resolve => {
        $responseMessage.subscribe(resolve);
    });
};

export const pluginToUIMessagePromise = messagePromise($uiSubject, message => figma.ui.postMessage(message));
export const UIToPluginMessagePromise = messagePromise($pluginSubject, message =>
    parent.postMessage({ pluginMessage: message }, '*')
);
