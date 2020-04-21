import * as React from 'react';
import { filter, map } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';

const $setTextChildren = new ReplaySubject();

export const setTextChildren = (node, characters) => {
    $setTextChildren.next({ node, characters });
};

$setTextChildren.subscribe(message => {
    console.log('$setTextChildren', message);
});

export const useTextChildren = nodeRef => {
    const [textChildren, setTextChildren] = React.useState(null);

    React.useEffect(() => {
        const instance = nodeRef.current;
        console.log('instance', instance);
        const subject = $setTextChildren.pipe(
            filter((message: any) => message.node.tempId === instance.tempId),
            map((message: any) => message.characters)
        );

        const subscription = subject.subscribe(setTextChildren);

        return () => subscription.unsubscribe();
    }, []);

    return textChildren;
};
