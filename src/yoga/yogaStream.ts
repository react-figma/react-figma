import { Observable, Subject } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';
import { yogaHandler } from './yogaHandler';
import { isReactFigmaNode } from '../isReactFigmaNode';

const $yogaRoot = new Subject();

export const $updatedYogaCoords = new Subject();

export const updateYogaRoot = (root: any) => {
    $yogaRoot.next(root);
};

export const updateYogaNode = (node: any) => {
    const parent = node.parent;
    if (!parent || !isReactFigmaNode(parent)) {
        updateYogaRoot(node);
    } else {
        updateYogaNode(parent);
    }
};

$yogaRoot
    .pipe(
        delay(0),
        concatMap((instance: any) => {
            return new Observable(subscriber => {
                const handleYogaProps = (newProps, instance) => {
                    const { children: yogaChildren, nodeBatchId, ...yogaPropsWithoutChildren } = newProps;
                    if (instance.parent && instance.parent.type === 'GROUP') {
                        yogaPropsWithoutChildren.x += instance.parent.x;
                        yogaPropsWithoutChildren.y += instance.parent.y;
                    }

                    if (nodeBatchId != instance.getPluginData('nodeBatchId')) {
                        updateYogaNode(instance);
                    }

                    subscriber.next({ instance, props: yogaPropsWithoutChildren });
                    if (instance.children) {
                        instance.children.forEach((child, index) => {
                            if (!yogaChildren || yogaChildren.length < index + 1) {
                                updateYogaNode(child);
                                return;
                            }
                            handleYogaProps(yogaChildren[index], child);
                        });
                    }
                };
                yogaHandler(instance).then(newProps => {
                    handleYogaProps(newProps, instance);
                    subscriber.complete();
                });
            });
        })
    )
    .subscribe($updatedYogaCoords);
