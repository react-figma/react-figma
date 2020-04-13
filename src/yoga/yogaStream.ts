import { Observable, Subject } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';
import { yogaHandler } from './yogaHandler';
import { APIBridgeComponent } from '../reconciler/APIBridgeComponent';

const $yogaRoot = new Subject();

export const $updatedYogaCoords = new Subject();

export const updateYogaRoot = (root: APIBridgeComponent) => {
    $yogaRoot.next(root);
};

export const updateYogaNode = (node: any) => {
    if (!node) {
        return;
    }
    const parent = node.parent;
    if (!parent) {
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
                const handleYogaProps = (newProps, instance, parentProps) => {
                    const { children: yogaChildren, nodeBatchId, ...yogaPropsWithoutChildren } = newProps;

                    subscriber.next({ instance, props: yogaPropsWithoutChildren });
                    if (instance.children) {
                        instance.children.forEach((child, index) => {
                            if (!yogaChildren || yogaChildren.length < index + 1) {
                                updateYogaNode(child);
                                return;
                            }
                            handleYogaProps(yogaChildren[index], child, yogaPropsWithoutChildren);
                        });
                    }
                };
                yogaHandler(instance).then(newProps => {
                    handleYogaProps(newProps, instance, null);
                    subscriber.complete();
                });
            });
        })
    )
    .subscribe($updatedYogaCoords);
