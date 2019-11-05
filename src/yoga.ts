import { asyncScheduler, Observable, Subject } from 'rxjs';
import { concatAll, map, mergeAll, multicast, observeOn } from 'rxjs/operators';
import { yogaHandler } from './yogaHandler';

const $yogaRoot = new Subject();

export const $updatedYogaCoords = new Subject();

$yogaRoot
    .pipe(
        map((instance: any) => {
            return new Observable(subscriber => {
                const handleYogaProps = (newProps, instance) => {
                    const { children: yogaChildren, ...yogaPropsWithoutChildren } = newProps;
                    if (instance.parent && instance.parent.type === 'GROUP') {
                        yogaPropsWithoutChildren.x += instance.parent.x;
                        yogaPropsWithoutChildren.y += instance.parent.y;
                    }

                    subscriber.next({ instance, props: yogaPropsWithoutChildren });
                    if (instance.children) {
                        instance.children.forEach((child, index) => {
                            handleYogaProps(newProps.children[index], child);
                        });
                    }
                };
                yogaHandler(instance).then(newProps => {
                    handleYogaProps(newProps, instance);
                    subscriber.complete();
                });
            });
        }),
        concatAll()
    )
    .subscribe($updatedYogaCoords);

export const addRoot = (root: any) => {
    console.log('addRoot', root);
    $yogaRoot.next(root);
};
