import { Observable, Subject } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';
import { yogaHandler } from './yogaHandler';
import { api } from '../rpc';

const $yogaRoot = new Subject();

export const $updatedYogaCoords = new Subject();

$updatedYogaCoords.subscribe(data => {
    console.log('updatedYogaCoords', data);
});

export const updateYogaRoot = (root: any) => {
    $yogaRoot.next(root);
};

export const updateYogaNode = (node: any) => {
    if (!node) {
        return;
    }
    updateYogaRoot(node);
};

$yogaRoot
    .pipe(
        delay(0),
        concatMap((instance: any) => {
            return new Observable(subscriber => {
                const handleYogaProps = newProps => {
                    const { children: yogaChildren, nodeBatchId, tempId, ...yogaPropsWithoutChildren } = newProps;

                    subscriber.next({ tempId, props: yogaPropsWithoutChildren });
                    if (yogaChildren) {
                        yogaChildren.forEach(child => {
                            handleYogaProps(child);
                        });
                    }
                };
                api.getTreeForYoga(instance).then(treeForYoga => {
                    console.log('treeForYoga', treeForYoga);
                    const newProps = yogaHandler(treeForYoga);
                    console.log('newProps', newProps);
                    handleYogaProps(newProps);
                    subscriber.complete();
                });
            });
        })
    )
    .subscribe($updatedYogaCoords);
