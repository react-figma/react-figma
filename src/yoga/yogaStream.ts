import { Observable, Subject } from 'rxjs';
import { concatMap, debounceTime } from 'rxjs/operators';
import { yogaHandler } from './yogaHandler';
import { APIBridgeComponent } from '../reconciler/APIBridgeComponent';

const $yogaRoot = new Subject();

export const $updatedYogaCoords = new Subject();

export const updateYogaRoot = (root: APIBridgeComponent) => {
    $yogaRoot.next(root);
};

export const updateYogaNode = (node: APIBridgeComponent) => {
    const { parent } = node;

    if (parent) {
        updateYogaNode(parent);
    } else {
        updateYogaRoot(node);
    }
};

$yogaRoot
    .pipe(
        debounceTime(100),
        concatMap((instance: any) => {
            return new Observable(subscriber => {
                const handleYogaProps = (newProps, instance, parentProps) => {
                    const { children: yogaChildren, nodeBatchId, ...yogaPropsWithoutChildren } = newProps;

                    if (instance.parent && instance.parent.type === 'group' && parentProps) {
                        yogaPropsWithoutChildren.x += parentProps.x;
                        yogaPropsWithoutChildren.y += parentProps.y;
                    }

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
