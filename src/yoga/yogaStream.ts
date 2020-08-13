import { Observable, Subject } from 'rxjs';
import { delay, exhaustMap, map, tap } from 'rxjs/operators';
import { yogaHandler } from './yogaHandler';
import { $updateYogaReactId, api } from '../rpc';

const $yogaRoot = new Subject();

export const $updatedYogaCoords = new Subject();

export const updateYogaRoot = (root: any) => {
    $yogaRoot.next(root);
};

export const updateYogaNode = (node: any) => {
    if (!node) {
        return;
    }
    updateYogaRoot(node);
};

const isReactFigmaExperimental = process.env.REACT_FIGMA_EXPERIMENTAL;

if (isReactFigmaExperimental) {
    console.log('REACT_FIGMA_EXPERIMENTAL');
    $updateYogaReactId
        .pipe(
            map(reactId => ({ reactId })),
            tap(val => console.log('$updateYogaReactId', val))
        )
        .subscribe($yogaRoot);
}

$yogaRoot
    .pipe(
        delay(0),
        exhaustMap((instance: any) => {
            return new Observable(subscriber => {
                const handleYogaProps = newProps => {
                    const { children: yogaChildren, nodeBatchId, reactId, ...yogaPropsWithoutChildren } = newProps;

                    subscriber.next({ reactId, props: yogaPropsWithoutChildren });
                    if (yogaChildren) {
                        yogaChildren.forEach(child => {
                            handleYogaProps(child);
                        });
                    }
                };
                api.getTreeForYoga(instance).then(treeForYoga => {
                    const newProps = yogaHandler(treeForYoga);
                    handleYogaProps(newProps);
                    subscriber.complete();
                });
            });
        })
    )
    .subscribe($updatedYogaCoords);
